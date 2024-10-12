import axios from "axios";
import { CompanySearch } from "../types";

type SearchCompaniesResponse = {
  data: CompanySearch[];
};

export const searchCompanies = async (query: string) => {
  try {
    const { data } = await axios.get<SearchCompaniesResponse>(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};
