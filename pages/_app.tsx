import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
        <Head>
          <title>Recehan - Indonesian Authentic Cryptocurrency</title>
          {/* description */}
          <meta
            name="description"
            content="Recehan - Indonesian Authentic Cryptocurrency"
          />
          {/* keywords */}
          <meta name="keywords" content="Recehan Token, Recehan NFT, Marketplace" />
          {/* author */}
          <meta name="author" content="Recehan Token" />
          {/* viewport */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
