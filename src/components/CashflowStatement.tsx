import { useOutletContext } from "react-router";
import { formatLargeNumber } from "../lib/helpers";
import { CompanyCashFlow } from "../lib/types";
import { useEffect, useState } from "react";
import { getCashflowRequest } from "../api/financialMetrics";
import Table from "./Table";
import Spinner from "./Spinner";

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeNumber(company.operatingCashFlow, { isMonetary: true }),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeNumber(company.netCashUsedForInvestingActivites, {
        isMonetary: true,
      }),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeNumber(company.netCashUsedProvidedByFinancingActivities, {
        isMonetary: true,
      }),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeNumber(company.cashAtEndOfPeriod, { isMonetary: true }),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeNumber(company.capitalExpenditure, { isMonetary: true }),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeNumber(company.commonStockIssued, { isMonetary: true }),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeNumber(company.freeCashFlow, { isMonetary: true }),
  },
];
const CashflowStatement = () => {
  const ticker = useOutletContext<string>();
  const [cashflow, setCashflow] = useState<CompanyCashFlow[]>([]);

  useEffect(() => {
    getCashflow();
  }, []);

  const getCashflow = async () => {
    const data = await getCashflowRequest(ticker);
    if (data) {
      setCashflow(data);
    }
  };
  return (
    <div>
      {cashflow ? <Table configs={config} data={cashflow} /> : <Spinner />}
    </div>
  );
};

export default CashflowStatement;
