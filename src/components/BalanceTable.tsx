import { Estonia } from "@next/font/google";

interface BalanceTableProps {
  balance: string;
  aggregateBalance: any;
}

export default function BalanceTable({
  balance,
  aggregateBalance,
}: BalanceTableProps) {
  if (!balance) return null;

  return (
    <div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white-900 sm:pl-6"
                    >
                      Wallet
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white-90"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white-900"
                    >
                      USD Value
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-white-900"
                    >
                      Change (24h)
                    </th>
                  </tr>
                </thead>
                <tbody className=" divide-gray-200">
                  {aggregateBalance?.map((token) => (
                    <tr key={token.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white-900 sm:pl-6">
                        {token.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white-500">
                        {Math.round(token.amount).toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white-500">
                        {token.price}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white-500">
                        {token.usdAmount}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-white-500">
                        {token.change24}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
