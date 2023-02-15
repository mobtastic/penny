import { Inter } from "@next/font/google";
import StakeContent from "@/components/StakeContent";
import { useCallback, useEffect, useState } from "react";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

//@ts-ignore
export default function NFT({ cantoPrice, cinuPrice, notePrice }) {
  const [coingeckoData, setCoingeckoData] = useState();

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
        image: "/Canto.png",
      },
      {
        name: "CINU",
        price: cinuPriceUSD,
        change: cinu24h,
        image: "/Shib.png",
      },
      {
        name: "NOTE",
        price: notePriceUSD,
        change: note24h,
        image: "/note.svg",
      }
    );

    // @ts-ignore
    setCoingeckoData([...tempArray]);
    // Current USD Price
  }, [coingeckoData]);

  useEffect(() => {
    getCoinGeckoData();
  }, []);

  return (
    <Layout coingeckoData={coingeckoData}>
      <StakeContent />
    </Layout>
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
