import { useOutletContext } from "react-router";
import { formatLargeNumber } from "../lib/helpers";
import { CompanyBalanceSheet } from "../lib/types";
import { useEffect, useState } from "react";
import { getBalanceSheetRequest } from "../api/financialMetrics";
import RatioList from "./RatioList";

const config = [
  {
    label: <div className="font-bold">Total Assets</div>,
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.totalAssets, { isMonetary: true }),
  },
  {
    label: "Current Assets",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.totalCurrentAssets, { isMonetary: true }),
  },
  {
    label: "Total Cash",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.cashAndCashEquivalents, { isMonetary: true }),
  },
  {
    label: "Property & equipment",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.propertyPlantEquipmentNet, {
        isMonetary: true,
      }),
  },
  {
    label: "Intangible Assets",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.intangibleAssets, { isMonetary: true }),
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.longTermDebt, { isMonetary: true }),
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.otherCurrentLiabilities, { isMonetary: true }),
  },
  {
    label: <div className="font-bold">Total Liabilites</div>,
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.totalLiabilities, { isMonetary: true }),
  },
  {
    label: "Current Liabilities",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.totalCurrentLiabilities, { isMonetary: true }),
  },
  {
    label: "Long-Term Debt",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.longTermDebt, { isMonetary: true }),
  },
  {
    label: "Long-Term Income Taxes",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.otherLiabilities, { isMonetary: true }),
  },
  {
    label: "Stakeholder's Equity",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.totalStockholdersEquity, { isMonetary: true }),
  },
  {
    label: "Retained Earnings",
    render: (company: CompanyBalanceSheet) =>
      formatLargeNumber(company.retainedEarnings, { isMonetary: true }),
  },
];

const BalancesSheet = () => {
  const ticker = useOutletContext<string>();
  const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();

  useEffect(() => {
    getBalanceSheet();
  }, []);

  const getBalanceSheet = async () => {
    const data = await getBalanceSheetRequest(ticker);
    if (data) {
      setBalanceSheet(data[0]);
    }
  };

  return (
    <div>
      {balanceSheet ? (
        <RatioList config={config} data={balanceSheet} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BalancesSheet;
