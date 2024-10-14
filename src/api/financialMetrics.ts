import axios from "axios";
import { CompanyKeyMetrics } from "../lib/types";

export const getKeyMetricsRequest = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data as CompanyKeyMetrics[];
  } catch (err) {
    console.log(err);
  }
};

export const getIncomeStatementRequest = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data as CompanyKeyMetrics[];
  } catch (err) {
    console.log(err);
  }
};
