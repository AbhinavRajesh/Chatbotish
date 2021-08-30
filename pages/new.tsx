import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Header from "@components/Dashboard/dashboardHeader";
import FAQ from "@components/New/FAQ";
import Screen from "@components/Widget/Screen";
import { Button, Card, Input, Text, Toggle, useToasts } from "@geist-ui/react";
import { UserContext } from "@context/UserContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Contact as ContactInterface, Domain, User } from "types";
import { db } from "@utils/firebase";
import Contact from "@components/New/Contact";

export default withPageAuthRequired(function New({ user: auth0user }) {
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
  const [contacts, setContacts] = useState<ContactInterface>(null);
  const [showContact, setShowContact] = useState<boolean>(false);

  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const addProject = async (e: any) => {
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
      const data: Domain = {
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
        feedback: [],
        bug: [],
        feature: [],
        faq: [],
        contact: null,
      };
      if (faq) data.faq = faqs;
      if (contact) data.contact = contacts;
      try {
        const project = await db.collection("project").add(data);
        const userRef = db.collection("users").doc(auth0user.email);
        const dbUser = (await userRef.get()).data() as User;
        const updatedUser = {
          ...dbUser,
          domains: [...dbUser!.domains, project.id],
          domainSnapshot: [
            ...dbUser.domainSnapshot,
            {
              id: project.id,
              name: projectName,
            },
          ],
        } as User;
        await userRef.set(updatedUser, { merge: true });
        setUser(updatedUser);
        setToast({
          text: "Created Project Successfully!.",
          type: "success",
        });
        router.push(`/project/${project.id}`);
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
      <Header auth0user={auth0user} />
      <form
        id="new"
        onSubmit={addProject}
        className="flex flex-col items-start justify-center my-8 px-4"
      >
        <Text h3>Create New Project</Text>
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
          <div className="w-full col-span-2 lg:col-span-1">
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
                  onChange={(e) => {
                    setFaq(e.target.checked);
                    if (!e.target.checked) setFaqs(null);
                  }}
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
                  onChange={(e) => {
                    setContact(e.target.checked);
                    if (!e.target.checked) setFaqs(null);
                  }}
                />
              </div>
              {!showContact && contact ? (
                <Contact
                  contacts={contacts}
                  setContacts={setContacts}
                  setShowContact={setShowContact}
                />
              ) : null}
              {showContact && (
                <Card>
                  {Object.entries(contacts).map(
                    ([key, value]) =>
                      value.length > 0 && (
                        <Text key={key}>
                          <span className="capitalize">{key}</span>:{" "}
                          <b>{value}</b>
                        </Text>
                      )
                  )}
                  <Button
                    type="success-light"
                    onClick={() => setShowContact(false)}
                  >
                    Edit Contact Details
                  </Button>
                </Card>
              )}
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
          <div className="hidden lg:flex flex-col items-center justify-start">
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
              contacts={contacts}
            />
          </div>
        </div>
      </form>
    </div>
  );
});
