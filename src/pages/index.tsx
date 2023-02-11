import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
// import { Web3Button } from "@web3modal/react";

const inter = Inter({ subsets: ["latin"] });

//
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className="text-3xl font-bold underline">Penny</h1>
          {/* <Web3Button /> */}
        </div>
      </main>
    </>
  );
}
