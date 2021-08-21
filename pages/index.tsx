import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import Header from "@components/Header";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (typeof user !== "undefined") router.push("/dashboard");
  }, [user]);

  if (isLoading) return "Loading...";

  return (
    <>
      <Header />
      <main>
        <div className="h-[100vh] flex flex-col justify-center align-middle text-center">
          <h1 className="text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
            Adding feedback, FAQ, Bug report, Feature request tab to your
            website made easy
          </h1>
          <h2 className="text-2xl max-w-md mx-auto">
            A Next.js Boilerplate with TypeScript, Tailwind CSS and testing
            suite enabled
          </h2>
        </div>
      </main>
    </>
  );
}
