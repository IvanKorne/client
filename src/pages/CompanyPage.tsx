import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../lib/types";
import { getCompanyProfileRequest } from "../api/companyData";
import Sidebar from "../components/Sidebar";
import CompanyDashboard from "../components/CompanyDashboard";
import Tile from "../components/Tile";

const CompanyPage = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  const getCompanyProfile = async () => {
    const result = await getCompanyProfileRequest(ticker!);
    if (result) {
      setCompany(result[0]);
    }
  };

  useEffect(() => {
    getCompanyProfile();
  }, []);

  return (
    <div>
      {company ? (
        <div className="relative flex w-full overflow-x-hidden ct-docs-disable-sidebar-content">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" value={company.companyName} />
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company not Found!</div>
      )}
    </div>
  );
};

export default CompanyPage;
