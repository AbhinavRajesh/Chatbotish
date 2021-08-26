import FAQ from "@components/New/FAQ";
import Screen from "@components/Widget/Screen";
import { Button, Card, Input, Text, Toggle, useToasts } from "@geist-ui/react";
import { useEffect, useState } from "react";
import { Domain } from "types";
import { db } from "@utils/firebase";

interface Props {
  id: string;
}

export default function EditProject({ id }: Props) {
  const [data, setData] = useState<Domain>();
  const [projectName, setProjectName] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [greeting, setGreeting] = useState("Hey 👋");

  const [feedback, setFeedback] = useState<boolean>(true);
  const [bug, setBug] = useState<boolean>(false);
  const [feature, setFeature] = useState<boolean>(false);
  const [faq, setFaq] = useState<boolean>(false);
  const [contact, setContact] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [toasts, setToast] = useToasts();
  const [disabled, setDisabled] = useState<boolean>(true);

  const [faqs, setFaqs] = useState<
    { id: number; question: string; answer: string }[]
  >([]);

  useEffect(() => {
    if (id) getData();
  }, [id]);

  const getData = async () => {
    const data = (
      await db.collection("project").doc(id).get()
    ).data() as Domain;
    setData(data);

    setProjectName(data.name);
    setDomain(data.domain);
    setGreeting(data.greeting);

    setFeedback(data.enabled.feedback);
    setBug(data.enabled.bug);
    setFeature(data.enabled.feature);
    setContact(data.enabled.contact);
    setFaq(data.enabled.faq);

    setFaqs(data.faq.map((f, i) => ({ ...f, id: i })));
  };

  const editProject = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (projectName.trim().length === 0) {
      setLoading(false);
      return setToast({
        text: "Please enter a valid project name",
        type: "error",
      });
    }
    if (greeting.trim().length === 0) {
      setLoading(false);
      return setToast({
        text: "Please enter some greeting text",
        type: "error",
      });
    }
    if (faq && faqs.length === 0) {
      setLoading(false);
      return setToast({
        text: "Please add atleast one FAQ",
        type: "error",
      });
    }
    if (feedback || bug || feature || faq || contact) {
      const newData = {
        name: projectName,
        domain: domain,
        greeting: greeting,
        enabled: {
          feedback,
          bug,
          feature,
          faq,
          contact,
        },
        feedback: data.feedback,
        bug: data.bug,
        feature: data.feedback,
        faq: [],
        contact: data.feedback,
      };
      if (faq) newData.faq = faqs;
      // ! Need to implement the contact
      if (contact) newData.contact = [];
      try {
        await db.collection("project").doc(id).set(newData, { merge: true });
        setToast({
          text: "Updated Project Successfully!.",
          type: "success",
        });
      } catch (err) {
        setToast({
          text: "Some error occured while adding the project. Please try again later.",
          type: "error",
        });
      }
    } else {
      setToast({
        text: "Please Select atleast one of the the feature",
        type: "error",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!bug && !feature && !contact && !faq) {
      setFeedback(true);
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [bug, feature, contact, faq]);

  return (
    <div className="max-w-5xl mx-auto">
      <form
        id="new"
        onSubmit={editProject}
        className="flex flex-col items-start justify-center my-8 "
      >
        <Input
          clearable
          placeholder="Enter Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        >
          <Text h4 color="black">
            Project Name
          </Text>
        </Input>
        <Input
          clearable
          placeholder="Enter Domain Name"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          required
        >
          <Text h4 color="black">
            Domain
          </Text>
        </Input>
        <Input
          clearable
          placeholder="Enter Project Name"
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          required
        >
          <Text h4 color="black" className="!mt-4">
            Greeting text
          </Text>
        </Input>
        <div className="grid grid-cols-2 gap-5 w-full">
          <div className="w-full">
            <Text h4 className="!mt-4">
              Required features
            </Text>
            <Card hoverable className="!my-2">
              <div className="flex items-center w-full justify-between px-4">
                <Text className="!mr-3">Feedback</Text>
                <Toggle
                  size="large"
                  checked={feedback}
                  disabled={disabled}
                  onChange={(e) => setFeedback(e.target.checked)}
                />
              </div>
            </Card>
            <Card hoverable className="!my-2">
              <div className="flex items-center w-full justify-between px-4">
                <Text className="!mr-3">Bug Report</Text>
                <Toggle
                  size="large"
                  checked={bug}
                  onChange={(e) => setBug(e.target.checked)}
                />
              </div>
            </Card>
            <Card hoverable className="!my-2">
              <div className="flex items-center w-full justify-between px-4">
                <Text className="!mr-3">Feature Request</Text>
                <Toggle
                  size="large"
                  checked={feature}
                  onChange={(e) => setFeature(e.target.checked)}
                />
              </div>
            </Card>
            <Card hoverable className="!my-2">
              <div className="flex items-center w-full justify-between px-4">
                <Text className="!mr-3">FAQ</Text>
                <Toggle
                  size="large"
                  checked={faq}
                  onChange={(e) => setFaq(e.target.checked)}
                />
              </div>
              {faq ? <FAQ faqs={faqs} setFaqs={setFaqs} /> : null}
            </Card>
            <Card hoverable className="!my-2">
              <div className="flex items-center w-full justify-between px-4">
                <Text className="!mr-3">Contact</Text>
                <Toggle
                  size="large"
                  checked={contact}
                  onChange={(e) => setContact(e.target.checked)}
                />
              </div>
            </Card>
            <Button
              loading={loading}
              type="success-light"
              htmlType="submit"
              className="!mt-4"
              form="new"
            >
              Add Project
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start">
            <Text h4 className="w-full !mt-4">
              Preview
            </Text>
            <Screen
              bug={bug}
              contact={contact}
              faq={faq}
              feature={feature}
              feedback={feedback}
              text={greeting}
              faqs={faqs}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
