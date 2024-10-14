import { useState, SyntheticEvent, ChangeEvent } from "react";
import { CompanySearch } from "../lib/types";
import { searchCompanies } from "../api/companyData";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import PortfolioList from "../components/PortfolioList";
import Cardlist from "../components/Card/Cardlist";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = async (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = async (e: any) => {
    e.preventDefault();

    const updatedPortfolio = portfolioValues.filter(
      (value) => value !== e.target[0].value
    );
    setPortfolioValues(updatedPortfolio);
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
        portfolios={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <Cardlist
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </>
  );
};

export default SearchPage;
