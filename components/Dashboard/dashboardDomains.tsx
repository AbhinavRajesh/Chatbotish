import { Button, Card } from "@geist-ui/react";
import { UserContext } from "context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

const DashboardDomains = ({ auth0user }) => {
  const { user } = useContext(UserContext);

  const router = useRouter();

  return (
    <div className="px-4 flex flex-col">
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="!m-0 text-2xl md:text-3xl lg:text-4xl">Dashboard</h1>
        <Button
          auto
          type="success-light"
          onClick={() => router.push("/new")}
          className="!text-xs !font-bold md:!text-base md:!font-normal"
        >
          Add Chatbotish
        </Button>
      </div>
      {user?.domainSnapshot?.length > 0 ? (
        user?.domainSnapshot?.map((domain, i) => (
          <Link href={`/project/${domain.id}`} key={i}>
            <a className="mt-4">
              <Card hoverable>{domain.name}</Card>
            </a>
          </Link>
        ))
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
