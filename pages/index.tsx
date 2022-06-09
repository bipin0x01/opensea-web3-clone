import type { NextPage } from "next";
import Head from "next/head";
import { Header, Hero } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
