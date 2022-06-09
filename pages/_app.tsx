import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
        <Head>
          <title>Bipinsea - I see you NFT Marketplace</title>
          {/* description */}
          <meta
            name="description"
            content="Bipinsea - I see you NFT Marketplace"
          />
          {/* keywords */}
          <meta name="keywords" content="Bipinsea, NFT, Marketplace" />
          {/* author */}
          <meta name="author" content="Bipin Thapa" />
          {/* viewport */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
