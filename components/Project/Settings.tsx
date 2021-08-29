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
            <Text h4 className="!m-0">
              Edit Project
            </Text>
            {!editProject && (
              <Button type="success-light" onClick={() => setEditProject(true)}>
                Edit
              </Button>
            )}
          </div>
          {editProject && <EditProject id={id} />}
        </div>
      </Card>
      <Fieldset className="!mt-4">
        <Fieldset.Title>Delete Project</Fieldset.Title>
        <Fieldset.Subtitle>
          Permanently remove the project `{project}` and all of its contents
          from Chatbotish. This action is not reversible, so please continue
          with caution.
        </Fieldset.Subtitle>
        <Fieldset.Footer>
          <div className="w-full flex items-center justify-between">
            <Text type="error">Delete Permanently</Text>
            <Button type="error-light" onClick={() => setVisible(true)}>
              Delete
            </Button>
          </div>
        </Fieldset.Footer>
      </Fieldset>
      <Modal {...bindings}>
        <Modal.Title>Delete Project</Modal.Title>
        <Modal.Subtitle className="!capitalize">
          Are you sure you want to delete project <b>{project}</b>?{" "}
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
            to delete the project forever
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
