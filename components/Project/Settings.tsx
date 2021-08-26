import FAQ from "@components/New/FAQ";
import Screen from "@components/Widget/Screen";
import { Button, Card, Input, Text, Toggle, useToasts } from "@geist-ui/react";
import { useEffect, useState } from "react";
import { Domain } from "types";
import { db } from "@utils/firebase";

interface Props {
  id: string;
}

export default function Settings({ id }: Props) {
  const [editProject, setEditProject] = useState<boolean>(false);

  return (
    <>
      <Card className="!mt-4">
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
      </Card>
      <Card className="!mt-4">
        <div className="flex justify-between items-center">
          <Text h4 className="!m-0">
            Delete Project
          </Text>
          <Text>
            Permanently remove this project and all of its contents from
            Chatbotish. This action is not reversible, so please continue with
            caution.
          </Text>
        </div>
        <Card.Footer>
          <div className="w-full flex items-center justify-between">
            <Text>Delete Permanently</Text>
            <Button type="error-light" onClick={() => setEditProject(true)}>
              Delete
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
