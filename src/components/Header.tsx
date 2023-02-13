import Head from "next/head";
import { Web3Button } from "@web3modal/react";
import { useWeb3ModalTheme } from "@web3modal/react";
import Image from "next/image";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect } from "wagmi";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Header() {
  const { setTheme } = useWeb3ModalTheme();

  setTheme({
    themeMode: "dark",
    themeColor: "green",
    themeBackground: "gradient",
  });

  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const label = isConnected ? "Disconnect" : "Connect Custom";

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  function onClick() {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }

  const dummyData = [
    {
      name: "CANTO",
      balance: "1.10",
      change: 0.023,
    },
    {
      name: "ATOM",
      balance: "13.38",
      change: 0.023,
    },
    {
      name: "CINU",
      balance: "0.0128",
      change: -0.023,
    },
    {
      name: "CANTO",
      balance: "1.10",
      change: 0.023,
    },
    {
      name: "ATOM",
      balance: "13.38",
      change: 0.023,
    },
  ];

  return (
    <>
      <Head>
        <title>Penny</title>
        <meta name="description" content="Canto Portfolio Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row min-w-full justify-between ">
        <Image src="/Logo.png" alt="Penny Logo" width={50} height={50} />
        <div className="flex w-3/4 justify-center items-center overflow-hidden border-t border-b border-t-[#2D312F] border-b-[#2D312F] background-black ">
          {dummyData.map((data, index) => (
            <div key={index} className={styles.scrollingTextItem}>
              {`${data.name}  $${data.balance} (${data.change > 0 ? "+" : "-"}${
                data.change * 100
              }%)`}
            </div>
          ))}
        </div>
        <div className="text-white">
          <Web3Button />
        </div>
      </div>
    </>
  );
}
