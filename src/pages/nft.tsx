import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useWeb3ModalTheme } from "@web3modal/react";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Balance from "@/components/Balance";
import BG from "../../public/BG.png";

const inter = Inter({ subsets: ["latin"] });

const NFTData = [
  {
    name: "Canto Longnecks",
    floorPrice: "3,900",
    estimatedValue: "2,028",
    imageURL: "https://i.imgur.com/DJkYTl2.gif",
  },
  {
    name: "DEAD ENDS",
    floorPrice: "2,300",
    estimatedValue: "1,196",
    imageURL: "https://i.imgur.com/f6Sr2YD.png",
  },
  {
    name: "Shnoises",
    floorPrice: "400",
    estimatedValue: "208",
    imageURL: "https://i.imgur.com/Rmoh5On.png",
  },
  {
    name: "Speranza",
    floorPrice: "277",
    estimatedValue: "144.04",
    imageURL: "https://i.imgur.com/nUtIwEg.jpg",
  },
];

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
          <div className="flex flex-row p-16 ">
            {NFTData.map((nft) => (
              <div
                className="w-1/4 h-48 bg-[#2E2E2E] rounded-md mr-8"
                key={nft.name}
              >
                <p>{nft.name}</p>
                <p>Floor Price</p>
                <p>{nft.floorPrice}</p>
                <p>Total Estimated Value</p>
                <p>{nft.estimatedValue}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
