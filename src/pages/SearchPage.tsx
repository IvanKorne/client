import { useState, SyntheticEvent, ChangeEvent, useEffect } from "react";
import { CompanySearch, PortfolioGet } from "../lib/types";
import { searchCompanies } from "../api/companyData";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import PortfolioList from "../components/PortfolioList";
import Cardlist from "../components/Card/Cardlist";
import {
  addPortfolioRequest,
  deletePortfolioRequest,
  getPortfolioRequest,
} from "../auth/portfolioService";
import { toast } from "react-toastify";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
    []
  );

  useEffect(() => {
    getPortfolio();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getPortfolio = async () => {
    const data = await getPortfolioRequest();
    if (data) {
      setPortfolioValues(data);
    }
  };

  const addToPortfolio = async (e: any) => {
    e.preventDefault();
    const data = await addPortfolioRequest(e.target[0].value);
    if (data) {
      toast.success("Stock added from portfolio!");
      getPortfolio();
    }
  };

  const deleteFromPortfolio = async (e: any) => {
    e.preventDefault();
    const data = await deletePortfolioRequest(e.target[0].value);
    if (data) {
      toast.success("Stock deleted from portfolio!");
      getPortfolio();
    }
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    setSearchResult(result || []);
  };

  return (
    <>
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <PortfolioList
        portfolios={portfolioValues!}
        onPortfolioDelete={deleteFromPortfolio}
      />
      <Cardlist
        searchResults={searchResult}
        onPortfolioCreate={addToPortfolio}
      />
    </>
  );
};

export default SearchPage;
