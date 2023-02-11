import { useAccount, useBalance } from "wagmi";

export default function Balance() {
  const { address } = useAccount();
  console.log("address", address);

  const { data, isError, isLoading } = useBalance({
    address: address,
  });

  return (
    <>
      <div className="w-full border p-6 ">
        <h1 className="text-4xl font-bold">Main Content</h1>
        <h1 className="text-4xl font-bold">{address}</h1>
        <h1 className="text-4xl font-bold">{data ? data?.formatted : null}</h1>
        <h1 className="text-4xl font-bold">{data ? data?.symbol : null}</h1>
      </div>
    </>
  );
}
