import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import Header from "@components/Header";
import { useEffect } from "react";
import { Button } from "@geist-ui/react";
import Features from "@components/Home/Feature";
import Footer from "@components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (typeof user !== "undefined") router.push("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <NextSeo
        title="Chatbotish"
        description="Increase user engagement, Adding Feedback, FAQ, Bug report, Feature request to your website made easy with Chatbotish."
        canonical="https://chatbotish.vercel.app"
        openGraph={{
          url: "https://chatbotish.vercel.app",
          title: "Chatbotish",
          description:
            "Increase user engagement, Adding Feedback, FAQ, Bug report, Feature request to your website made easy with Chatbotish.",
          images: [
            {
              url: "https://chatbotish.vercel.app/logo512.png",
              width: 512,
              height: 512,
              alt: "Og Image Alt",
            },
            {
              url: "https://chatbotish.vercel.app/logo192.png",
              width: 192,
              height: 192,
              alt: "Og Image Alt Second",
            },
          ],
          site_name: "Chatbotish",
        }}
        twitter={{
          handle: "@_AbhinavRajesh_",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <main className="max-w-5xl mx-auto px-8">
        <div className="h-[100vh] flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
            Increase user engagement with Chatbotish.
          </h1>
          <h2 className="text-xl lg:text-2xl max-w-2xl">
            Adding Feedback, FAQ, Bug report, Feature request to your website
            made easy.
          </h2>
          <div>
            <Button
              type="success-light"
              className="!font-bold mr-4"
              onClick={() => router.push("/api/auth/login")}
            >
              Get Started
            </Button>
            <Button
              className="!font-bold !mt-2 !lg:mt-0 mr-4 !text-white !bg-green-400"
              onClick={() => {
                window.scrollTo(
                  0,
                  document.getElementById("features").offsetTop
                );
              }}
            >
              Features
            </Button>
          </div>
        </div>
        {typeof window !== "undefined" && <Features />}
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
