import "inter-ui/inter.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { CssBaseline, GeistProvider } from "@geist-ui/react";
import { UserProvider as Auth0UserProvider } from "@auth0/nextjs-auth0";
import UserProvider from "context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0UserProvider>
      <UserProvider>
        <GeistProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </GeistProvider>
      </UserProvider>
    </Auth0UserProvider>
  );
}

export default MyApp;
