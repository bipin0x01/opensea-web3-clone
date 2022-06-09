import { useAddress, useMetamask } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { Header, Hero } from "../components";

const style = {
  wrapper: ` h-screen w-screen`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border px-8 bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-3xl cursor-pointer text-white`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
  buttonWrapper: `flex flex-col justify-center items-center  h-screen `,
};

const Home: NextPage = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  return (
    <div className={style.wrapper}>
      {address ? (
        <>
          <Header address={address} />
          <Hero />
        </>
      ) : (
        <>
          <div className={style.buttonWrapper}>
            <button className={style.button} onClick={connectWithMetamask}>
              <a href="/connect">Connect to Wallet</a>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
