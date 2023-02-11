import Head from "next/head";
import { Web3Button } from "@web3modal/react";
import { useWeb3ModalTheme } from "@web3modal/react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <Head>
        <title>Penny</title>
        <meta name="description" content="Canto Portfolio Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row min-w-full justify-between ">
        <Image src="/logo.png" alt="Penny Logo" width={50} height={50} />
        <Web3Button />
      </div>
    </>
  );
}
