import RatioList from "../components/RatioList";
import Table from "../components/Table";
import { INCOME_STATEMENT_DATA } from "../lib/companyData";
import { CompanyKeyMetrics } from "../lib/types";

const DesignPage = () => {
  const tableConfig = [
    {
      label: "Market Cap",
      render: (company: CompanyKeyMetrics) => company.marketCapTTM,
      subTitle: "Total value of all company's shares of stock",
    },
  ];
  return (
    <div>
      <h1>WealthWise Design Page</h1>
      <h3>
        This is WealthWise design page. This is where we well house design
        aspects of the app!
      </h3>
      <RatioList config={tableConfig} data={INCOME_STATEMENT_DATA} />
      <Table />
    </div>
  );
};

export default DesignPage;
