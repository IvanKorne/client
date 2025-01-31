import { useOutletContext } from "react-router";
import { CompanyKeyMetrics } from "../lib/types";
import { useEffect, useState } from "react";
import { getKeyMetricsRequest } from "../api/financialMetrics";
import RatioList from "./RatioList";
import Spinner from "./Spinner";
import { formatLargeNumber } from "../lib/helpers";
import StockComment from "./Stock/StockComment";

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.marketCapTTM, { isMonetary: true }),
    subTitle: "Total value of all company's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.currentRatioTTM, { isMonetary: false }),
    subTitle:
      "Measures the companies ability to pay short term debt obligations",
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.roeTTM, { isMonetary: true }),
    subTitle:
      "Return on equity is the measure of a company's net income divided by its shareholder's equity",
  },
  {
    label: "Return On Assets",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.returnOnTangibleAssetsTTM, {
        isMonetary: false,
      }),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Free Cashflow Per Share",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.freeCashFlowPerShareTTM, { isMonetary: true }),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Book Value Per Share TTM",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.bookValuePerShareTTM, { isMonetary: true }),
    subTitle:
      "Book value per share indicates a firm's net asset value on per share basis",
  },
  {
    label: "Divdend Yield TTM",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.dividendYieldTTM, { isMonetary: true }),
    subTitle: "Shows how much a company pays each year relative to stock price",
  },
  {
    label: "Capex Per Share TTM",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.capexPerShareTTM, { isMonetary: false }),
    subTitle:
      "Capex is used by a company to aquire, upgrade, and maintain physical assets",
  },
  {
    label: "Graham Number",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.grahamNumberTTM, { isMonetary: true }),
    subTitle:
      "This is the upperbound of the price range that a defensive investor should pay for a stock",
  },
  {
    label: "PE Ratio",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNumber(company.peRatioTTM, { isMonetary: true }),
    subTitle:
      "This is the upperbound of the price range that a defensive investor should pay for a stock",
  },
];

const CompanyProfile = () => {
  const ticker = useOutletContext();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();

  const getKeyMetrics = async () => {
    const data = await getKeyMetricsRequest(ticker as string);
    if (data) {
      setCompanyData(data[0]);
    }
  };
  useEffect(() => {
    getKeyMetrics();
  }, []);
  return (
    <div>
      {companyData ? (
        <>
          <RatioList data={companyData} config={tableConfig} />
          <StockComment stockSymbol={ticker as string} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CompanyProfile;
