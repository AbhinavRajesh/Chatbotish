import { Divider, Snippet, Text } from "@geist-ui/react";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

interface Snippets {
  title: string;
  snippets: SnippetInterface[];
}

interface SnippetInterface {
  label: string;
  snippet: string;
}

const Setup = ({ id }: Props) => {
  const [snippets, setSnippets] = useState<Snippets[]>([]);

  const WIDGET_URL = "http://localhost:3000";

  useEffect(() => {
    // <script
    //     src='https://staticshield.vercel.app/script.js'
    //     data-site-id='6c257853-1c46-4a8b-9e7a-bb9f3a4d8f9d'
    //     data-cap='Test'
    // ></script>
    if (id) {
      createSnippet(id);
    }
  }, [id]);

  const createSnippet = (id: string) => {
    setSnippets([
      {
        title: "Vanilla HTML, JS, CSS",
        snippets: [
          {
            label:
              "Add this snippet to any html page in the head tag to add the bot.",
            snippet: `<link href="${WIDGET_URL}/index.css" rel="stylesheet" /><script src='${WIDGET_URL}/index.js' data-chatbotish data-id='${id}' async></script>`,
          },
        ],
      },
      {
        title: "React",
        snippets: [
          {
            label:
              "Add this snippet to public/index.html page in the head tag to add the bot to all pages or inject the snippet to head tag using react-helmet",
            snippet: `<link href="${WIDGET_URL}/index.css" rel="stylesheet" /><script src='${WIDGET_URL}/index.js' data-chatbotish data-id='${id}' async></script>`,
          },
        ],
      },
      {
        title: "NextJS (v11)",
        snippets: [
          {
            label: "Inject this link tag in NextJS <Head> tag",
            snippet: `<link href="${WIDGET_URL}/index.css" rel="stylesheet" />`,
          },
          {
            label: "Import 'Script' from 'next/script'",
            snippet: `<Script src='${WIDGET_URL}/script.js' data-chatbotish data-id='${id}' strategy='afterInteractive'></Script>`,
          },
        ],
      },
      {
        title: "NextJS (v10 and below)",
        snippets: [
          {
            label: "Add this snippet to <Head> tag of NextJS",
            snippet: `<link href="${WIDGET_URL}/index.css" rel="stylesheet" /><script src='${WIDGET_URL}/index.js' data-chatbotish data-id='${id}' async></script>`,
          },
        ],
      },
    ]);
  };

  return (
    <>
      <Text h4>Code Snippets</Text>
      {snippets.map((snippet, i) => (
        <div key={i} className="my-4">
          <Text h5 className="!text-blue-500 !font-bold text-xl !mb-0">
            {snippet.title}
          </Text>
          {snippet.snippets.map((s, j) => (
            <div key={j}>
              <Text className="!my-0 text-base">{s.label}</Text>
              <Snippet
                className="!mt-2 !mb-8"
                symbol=""
                type="dark"
                text={s.snippet}
              />
            </div>
          ))}
          <Divider />
        </div>
      ))}
    </>
  );
};

export default Setup;
