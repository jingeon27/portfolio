import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio website</title>
        <meta name="portfolio" content="introduce for me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
