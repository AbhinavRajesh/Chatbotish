import Router from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import Header from "@components/Header";

export default function Home() {
  const { user, isLoading } = useUser();

  if (isLoading) return "Loading...";

  if (user) return Router.push("/dashboard");

  return (
    <>
      <Header />
      <main>
        <div className="h-[100vh] flex flex-col justify-center align-middle text-center">
          <h1 className="text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
            Batteries Included Next.js
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
