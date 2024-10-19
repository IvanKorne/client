import { useEffect, useState } from "react";
import { CompanyTenK } from "../lib/types";
import { getTenKRequest } from "../api/financialMetrics";
import Spinner from "./Spinner";
import TenKItem from "./TenKItem";

type TenKProps = {
  ticker: string;
};

const TenK = ({ ticker }: TenKProps) => {
  const [tenKData, setTenKData] = useState<CompanyTenK[]>([]);
  useEffect(() => {
    getTenK();
  }, [ticker]);

  const getTenK = async () => {
    const data = await getTenKRequest(ticker);
    if (data) {
      setTenKData(data);
    }
  };

  return (
    <div className="inline-flex items-center justify-center w-full gap-5 m-4 rounded-md shadow-sm">
      {tenKData ? (
        tenKData
          .slice(0, 5)
          .map((tenK) => <TenKItem data={tenK} key={tenK.cik} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenK;
