import {
  Button,
  Card,
  Fieldset,
  Input,
  Modal,
  Text,
  Toggle,
  useModal,
  useToasts,
} from "@geist-ui/react";
import { useState } from "react";
import { db } from "@utils/firebase";
import EditProject from "./EditProject";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { User } from "types";

interface Props {
  id: string;
  project: string;
}

export default function Settings({ id, project }: Props) {
  const [editProject, setEditProject] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const { user } = useUser();
  const { setVisible, bindings } = useModal();

  const [toasts, setToasts] = useToasts();
  const router = useRouter();

  const deleteProject = async () => {
    try {
      await db.collection("project").doc(id).delete();
      const userRef = db.collection("users").doc(user?.email);
      const prevData = (await userRef.get()).data() as User;
      const newDomainList = prevData.domainSnapshot.filter(
        (doc) => doc.id !== id
      );
      const updatedUserData: User = {
        ...prevData,
        domainSnapshot: newDomainList,
      };
      userRef.set(updatedUserData, { merge: true });
      setToasts({
        text: `${project} deleted!`,
        type: "success",
      });
      router.push("/dashboard");
    } catch (err) {
      setToasts({
        text: `Some error occured while deleting the project ${project}. Please try again later!`,
        type: "error",
      });
    }
  };

  return (
    <>
      <Card className="!mt-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <Text h4 className="!m-0 !text-base md:!text-lg">
              Edit Project
            </Text>
            {!editProject && (
              <Button
                type="success-light"
                onClick={() => setEditProject(true)}
                size={window.innerWidth < 768 ? "small" : "medium"}
              >
                Edit
              </Button>
            )}
          </div>
          {editProject && <EditProject id={id} />}
        </div>
      </Card>
      <Fieldset className="!mt-4">
        <Fieldset.Title className="!text-base md:!text-lg">
          Delete Project
        </Fieldset.Title>
        <Fieldset.Subtitle>
          Permanently remove the project `{project}` and all of its contents
          from Chatbotish. This action is not reversible, so please continue
          with caution.
        </Fieldset.Subtitle>
        <Fieldset.Footer>
          <div className="w-full flex items-center justify-between">
            <Text type="error" className="!m-0 ">
              Delete Permanently
            </Text>
            <Button
              type="error-light"
              onClick={() => setVisible(true)}
              size={window.innerWidth < 768 ? "small" : "medium"}
            >
              Delete
            </Button>
          </div>
        </Fieldset.Footer>
      </Fieldset>
      <Modal {...bindings}>
        <Modal.Title>Delete Project</Modal.Title>
        <Modal.Subtitle className="!capitalize text-center !mb-3">
          Are you sure you want to delete project <b>{project}</b>? <br />
          <span className="text-red-500 font-semibold">
            Once deleted it cannot be reverted.
          </span>
        </Modal.Subtitle>
        <Modal.Content>
          <Text className="!mt-4">
            Enter{" "}
            <b>
              {user.name}/{project}
            </b>{" "}
            to delete the project forever :(
          </Text>
          <Input width="100%" onChange={(e) => setInput(e.target.value)} />
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action
          type="error-light"
          disabled={input !== `${user.name}/${project}`}
          onClick={deleteProject}
        >
          Delete
        </Modal.Action>
      </Modal>
    </>
  );
}
