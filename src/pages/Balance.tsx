import { cantoProvider } from "@/pages/_app";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";

import BalanceTable from "@/components/BalanceTable";
import { formatedBalance } from "@/utils/EthersUtils";

import CINU_ABI from "@/abis/CINU_ABI.json";
import NOTE_ABI from "@/abis/NOTE_ABI.json";

export default function Balance() {
  const { address, isDisconnected } = useAccount();
  const [balance, setBalance] = useState("");
  const [cinuBalance, setCinuBalance] = useState("");
  const [noteBalance, setNoteBalance] = useState("");

  const getBalance = useCallback(async () => {
    const balance = await cantoProvider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    setBalance(balanceInEth.toString());
  }, [address]);

  const checkOtherTokenBalances = useCallback(async () => {
    let tempAggregateBalanceArray = [];
    // Get CUINU balance;
    const CINUcontractAddress = "0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455";
    const cinuABI = CINU_ABI;
    const CINUcontract = new ethers.Contract(
      CINUcontractAddress,
      cinuABI,
      cantoProvider
    );
    const cinuBalance = await CINUcontract.balanceOf(address);

    setCinuBalance(formatedBalance(cinuBalance));

    // Get Note balance;
    const NOTEcontractAddress = "0x4e71A2E537B7f9D9413D3991D37958c0b5e1e503";
    const noteABI = NOTE_ABI;
    const noteContract = new ethers.Contract(
      NOTEcontractAddress,
      noteABI,
      cantoProvider
    );
    const noteBalance = await noteContract.balanceOf(address);

    setNoteBalance(formatedBalance(noteBalance));
  }, [address]);

  useEffect(() => {
    if (address) {
      getBalance();
      checkOtherTokenBalances();
      console.log("aggregateBalanceArray...");
    }
    if (isDisconnected) {
      setBalance("");
    }
  }, [
    address,
    getBalance,
    checkOtherTokenBalances,
    isDisconnected,
    cinuBalance,
    noteBalance,
  ]);

  // ToDo list:
  // 1. Add a loading state
  // 2. Set canto as deafult
  // 3. Parse through the other tokens that they have. (Canto + USDC + USDT + ATOM + USDC )
  // 4. Need Coingecko / Coinmarketcap API

  return (
    <>
      <div className="w-full p-6 pr-0 ">
        <PortfolioBalance balance={balance} />

        <BalanceTable
          balance={balance}
          cinuBalance={cinuBalance}
          noteBalance={noteBalance}
        />
      </div>
    </>
  );
}
