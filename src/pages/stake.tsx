import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useWeb3ModalTheme } from "@web3modal/react";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Balance from "@/components/Balance";
import BG from "../../public/BG.png";
import BalanceTable from "@/components/BalanceTable";
import StakeContent from "@/components/StakeContent";

const inter = Inter({ subsets: ["latin"] });

//
export default function NFT() {
  const { setTheme } = useWeb3ModalTheme();

  setTheme({
    themeMode: "dark",
    themeColor: "green",
    themeBackground: "gradient",
  });

  return (
    <div>
      <main
        className={styles.main}
        style={{
          backgroundImage: `url(${BG.src})`,
          backgroundSize: "cover",
        }}
      >
        <Header />
        <div className={"flex min-w-full h-[70vh]"}>
          <SideBar />
          <StakeContent />
        </div>
      </main>
    </div>
  );
}
