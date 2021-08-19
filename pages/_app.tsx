import "inter-ui/inter.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { CssBaseline, GeistProvider } from "@geist-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <GeistProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </UserProvider>
  );
}

export default MyApp;
