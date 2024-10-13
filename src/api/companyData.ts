import axios from "axios";
import { CompanySearch } from "../types";

export const searchCompanies = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    );

    return data as CompanySearch[];
  } catch (err) {
    console.log(err);
  }
};
