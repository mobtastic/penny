import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import {
//   EthereumClient,
//   modalConnectors,
//   walletConnectProvider,
// } from "@web3modal/ethereum";

// import { Web3Modal } from "@web3modal/react";
// import { configureChains, createClient, WagmiConfig } from "wagmi";
// import { canto, mainnet } from "wagmi/chains";

export default function App({ Component, pageProps }: AppProps) {
  // const chains = [mainnet];
  // const projectId = process.env.WC_PROJECT_ID!;
  // console.log("projectID", projectId);

  // const { provider } = configureChains(chains, [
  //   walletConnectProvider({ projectId }),
  // ]);
  // const wagmiClient = createClient({
  //   autoConnect: true,
  //   connectors: modalConnectors({
  //     projectId,
  //     version: "1", // or "2"
  //     appName: "Penny",
  //     chains,
  //   }),
  //   provider,
  // });

  // const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <>
      {/* <WagmiConfig client={wagmiClient}> */}
      <Component {...pageProps} />
      {/* </WagmiConfig> */}

      {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </>
  );
}
