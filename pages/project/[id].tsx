import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Card, Loading, Snippet, Tabs, Text } from "@geist-ui/react";

import Header from "@components/Dashboard/dashboardHeader";

import { UserContext } from "@context/UserContext";
import { db } from "@utils/firebase";
import { Domain } from "types";
import Setup from "@components/Project/Setup";
import Bug from "@components/Project/Bug";
import Feedback from "@components/Project/Feedback";
import Settings from "@components/Project/Settings";
import Feature from "@components/Project/Feature";
import Footer from "@components/Footer";

export default withPageAuthRequired(function Project({ user: auth0user }) {
  const [projectDetails, setProjectDetails] = useState<Domain>(null);
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (router.query.id && user !== null) {
      getProjectDetails(router.query.id);
    }
  }, [router.query.id, user]);

  const getProjectDetails = async (projectId) => {
    const project = (await (
      await db.collection("project").doc(projectId).get()
    ).data()) as Domain;
    if (project) setProjectDetails(project);
  };

  const getComponent = (componentName: string) => {
    switch (componentName) {
      case "bug":
        return <Bug bugReports={projectDetails.bug} />;
      case "feedback":
        return <Feedback feedback={projectDetails.feedback} />;
      case "feature":
        return <Feature featureRequests={projectDetails.feature} />;
      default:
        return <div>{componentName}</div>;
    }
  };

  if (user === null && auth0user !== null) return <div>Loading...</div>;

  if (user?.domains?.indexOf(router.query.id as string) > -1) {
    return (
      <div className="max-w-5xl mx-auto">
        <Header auth0user={auth0user} />
        {projectDetails !== null ? (
          <div className="px-4 flex flex-col">
            <div className="flex w-full items-center justify-start mb-4">
              <h1 className="!m-0 text-2xl">{projectDetails?.name}</h1>
            </div>
            <Tabs initialValue="setup">
              <Tabs.Item label="Setup" value="setup">
                <Setup id={router.query.id as string} />
              </Tabs.Item>
              {Object.entries(projectDetails.enabled).map(
                ([key, val], i) =>
                  val &&
                  key !== "faq" &&
                  key !== "contact" && (
                    <Tabs.Item
                      label={key[0].toUpperCase() + key.slice(1)}
                      value={key}
                      key={i + 1}
                    >
                      {getComponent(key)}
                    </Tabs.Item>
                  )
              )}
              <Tabs.Item label="Settings" value="settings">
                <Settings
                  id={router.query.id as string}
                  project={projectDetails.name}
                />
              </Tabs.Item>
            </Tabs>
          </div>
        ) : (
          <Loading type="success" />
        )}
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center flex-col h-screen">
        <Text h1>404.</Text>
        <Text>The page you are looking for could not be found.</Text>
        <button onClick={() => router.back()} className="text-blue-500">
          Go Back
        </button>
        {user && <Link href="/dashboard">Back to dashboard</Link>}
      </div>
    );
  }
});
