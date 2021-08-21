import { Button } from "@geist-ui/react";
import { UserContext } from "context/UserContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const DashboardDomains = ({ auth0user }) => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (auth0user?.email) {
      getDomains(auth0user.email);
    }
  }, []);

  const getDomains = (email: string) => {};

  return (
    <div className="px-16 flex flex-col">
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="!m-0">Dashboard</h1>
        <Button auto type="success-light" onClick={() => router.push("/new")}>
          Add Chatbotish
        </Button>
      </div>
      {user?.domainSnapshot?.length > 0 ? (
        <div>Display website</div>
      ) : (
        <div className="flex flex-col items-start border-t pt-4">
          <h3 className="text-center font-medium text-lg">
            No website added. Please add website to add Chatbotish to your
            website
          </h3>
          <Button auto type="success-light" onClick={() => router.push("/new")}>
            Add Chatbotish
          </Button>
        </div>
      )}
    </div>
  );
};

export default DashboardDomains;
