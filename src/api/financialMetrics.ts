import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
} from "../lib/types";

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
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data as CompanyIncomeStatement[];
  } catch (err) {
    console.log(err);
  }
};

export const getBalanceSheetRequest = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data as CompanyBalanceSheet[];
  } catch (err) {
    console.log(err);
  }
};

export const getCashflowRequest = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data as CompanyCashFlow[];
  } catch (err) {
    console.log(err);
  }
};
