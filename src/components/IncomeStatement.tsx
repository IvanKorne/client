import React, { useEffect, useState } from "react";
import { CompanyIncomeStatement } from "../lib/types";
import { useOutletContext } from "react-router";
import { getIncomeStatementRequest } from "../api/financialMetrics";
import Table from "./Table";
import Spinner from "./Spinner";
import { formatLargeNumber } from "../lib/helpers";

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.revenue, { isMonetary: true }),
  },
  {
    label: "Cost Of Revenue",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.costOfRevenue, { isMonetary: true }),
  },
  {
    label: "Depreciation",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.depreciationAndAmortization, {
        isMonetary: true,
      }),
  },
  {
    label: "Operating Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.operatingIncome, { isMonetary: true }),
  },
  {
    label: "Income Before Taxes",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.incomeBeforeTax, { isMonetary: true }),
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.netIncome, { isMonetary: true }),
  },
  {
    label: "Net Income Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.netIncomeRatio, { isMonetary: false }),
  },
  {
    label: "Earnings Per Share",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.eps, { isMonetary: true }),
  },
  {
    label: "Earnings Per Diluted",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.epsdiluted, { isMonetary: true }),
  },
  {
    label: "Gross Profit Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.grossProfitRatio, { isMonetary: false }),
  },
  {
    label: "Operating Income Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.operatingIncomeRatio, { isMonetary: false }),
  },
  {
    label: "Income Before Taxes Ratio",
    render: (company: CompanyIncomeStatement) =>
      formatLargeNumber(company.incomeBeforeTaxRatio, { isMonetary: false }),
  },
];

const IncomeStatement = () => {
  const ticker = useOutletContext<string>();
  const [incomeStatement, setIncomeStatement] =
    useState<CompanyIncomeStatement[]>();

  useEffect(() => {
    getCompanyIncomeStatement();
  }, []);

  const getCompanyIncomeStatement = async () => {
    const result = await getIncomeStatementRequest(ticker);

    if (result) {
      setIncomeStatement(result);
    }
  };

  return (
    <div>
      {incomeStatement ? (
        <Table configs={configs} data={incomeStatement} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default IncomeStatement;
