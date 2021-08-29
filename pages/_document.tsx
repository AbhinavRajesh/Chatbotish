import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logo192.png"></link>
          <meta name="theme-color" content="#113300" />
          <link
            href="https://chatbotish.vercel.app/index.css"
            rel="stylesheet"
          />
          <script
            src="https://chatbotish.vercel.app/index.js"
            data-chatbotish
            data-id="Pa1XoprGcKt1UO7H328k"
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
