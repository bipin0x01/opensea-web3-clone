import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}

export default MyApp;
