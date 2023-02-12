import balanceContainer from "../../public/Balance.png";

interface PortfolioBalanceProps {
  balance: string;
}

//ToDo: Fix the centering of image, hardcode the ml-16 atm
export default function PortfolioBalance({ balance }: PortfolioBalanceProps) {
  return (
    // <div className="flex justify-end ">
    <div className="flex justify-start ">
      <div
        style={{
          backgroundImage: `url(${balanceContainer.src})`,
          width: "350px",
          height: "132px",
          backgroundSize: "cover",
          display: "flex",
        }}
      >
        <div className="flex flex-col text-black justify-center items-center ml-8">
          <h1 className="text-5xl font-bold">
            {balance ? balance + " CANTO" : "No Balance"}
          </h1>
          <h1 className="mt-2">Portfolio Balance</h1>
        </div>
      </div>
    </div>
  );
}
