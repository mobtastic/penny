import { cantoProvider } from "@/pages/_app";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import BalanceTable from "./BalanceTable";
import CINU_ABI from "@/abis/CINU_ABI.json";
import { formatedBalance } from "@/utils/EthersUtils";
import Image from "next/image";
import balanceContainer from "../../public/Balance.png";
import PortfolioBalance from "./PortfolioBalance";

export default function Balance() {
  const { address } = useAccount();
  const [balance, setBalance] = useState("");

  const getBalance = useCallback(async () => {
    const balance = await cantoProvider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    setBalance(balanceInEth.toString());
  }, [address]);

  const checkCINUBalance = useCallback(async () => {
    const contractAddress = "0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455";
    const abi = CINU_ABI;
    const CINUcontract = new ethers.Contract(
      contractAddress,
      abi,
      cantoProvider
    );
    const balance = await CINUcontract.balanceOf(address);
    console.log(formatedBalance(balance));
  }, [address]);

  useEffect(() => {
    if (address) {
      getBalance();
      checkCINUBalance();
    }
  }, [address, getBalance, checkCINUBalance]);

  // ToDo list:
  // 1. Add a loading state
  // 2. Set canto as deafult
  // 3. Parse through the other tokens that they have. (Canto + USDC + USDT + ATOM + USDC )
  // 4. Need Coingecko / Coinmarketcap API

  return (
    <>
      <div className="w-full p-6 pr-0 ">
        <PortfolioBalance balance={balance} />
        <BalanceTable />
      </div>
    </>
  );
}
