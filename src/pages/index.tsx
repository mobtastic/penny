import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useWeb3ModalTheme } from "@web3modal/react";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Balance from "@/components/Balance";
import BG from "../../public/BG.png";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

//
export default function Home({ cantoPrice, cinuPrice, notePrice }) {
  const { setTheme } = useWeb3ModalTheme();
  const [coingeckoData, setCoingeckoData] = useState();

  setTheme({
    themeMode: "dark",
    themeColor: "green",
    themeBackground: "gradient",
  });
  // console.log("cantoPrice", cantoPrice.prices[0][1]);

  const getCoinGeckoData = useCallback(async () => {
    const cantoPriceUSD = cantoPrice.prices[0][1];
    const cinuPriceUSD = cinuPrice.prices[0][1];
    const notePriceUSD = notePrice.prices[0][1];
    const canto24h =
      (1 - cantoPrice.prices[0][1] / cantoPrice.prices[1][1]) * 100;
    const cinu24h = (1 - cinuPrice.prices[0][1] / cinuPrice.prices[1][1]) * 100;
    const note24h = (1 - notePrice.prices[0][1] / notePrice.prices[1][1]) * 100;

    let tempArray = [];
    tempArray.push(
      {
        name: "CANTO",
        price: cantoPriceUSD,
        change: canto24h,
      },
      {
        name: "CINU",
        price: cinuPriceUSD,
        change: cinu24h,
      },
      {
        name: "NOTE",
        price: notePriceUSD,
        change: note24h,
      }
    );

    setCoingeckoData([...tempArray]);
    // Current USD Price
  }, [coingeckoData]);

  useEffect(() => {
    getCoinGeckoData();
  }, []);

  return (
    <div>
      <main
        className={styles.main}
        style={{
          backgroundImage: `url(${BG.src})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Header coingeckoData={coingeckoData} />
        <div className={"flex min-w-full h-[70vh]"}>
          <SideBar />
          <Balance />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const cantoData = await fetch(
    "https://api.coingecko.com/api/v3/coins/canto/market_chart?vs_currency=usd&days=1&interval=daily"
  );
  const cantoPrice = await cantoData.json();

  const cinuData = await fetch(
    "https://api.coingecko.com/api/v3/coins/canto-inu/market_chart?vs_currency=usd&days=1&interval=daily"
  );
  const cinuPrice = await cinuData.json();

  const noteData = await fetch(
    "https://api.coingecko.com/api/v3/coins/note/market_chart?vs_currency=usd&days=1&interval=daily"
  );
  const notePrice = await noteData.json();

  if (!cantoData || !cinuData || !noteData) {
    return { notFound: true };
  }

  return { props: { cantoPrice, cinuPrice, notePrice } };
}
