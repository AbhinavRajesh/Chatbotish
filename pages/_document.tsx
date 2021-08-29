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
          <meta name="og:image" content="/ogImage.jpg" />
          <meta name="twitter:image" content="/ogImage.jpg" />
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
          <script
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="abhinavrajesh"
            data-description="Support me on Buy me a coffee!"
            data-message="Hope adding Chatbotish to your website increased the user engagement. If so consider buying me a coffee, it would make my day :D"
            data-color="#5F7FFF"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="90"
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
