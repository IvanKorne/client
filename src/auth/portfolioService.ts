import axios from "axios";
import { PortfolioGet, PortfolioPost } from "../lib/types";

export const addPortfolioRequest = async (symbol: string) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/portfolio/?symbol=${symbol}`
    );

    return data as PortfolioPost;
  } catch (err) {
    console.log(err);
  }
};

export const deletePortfolioRequest = async (symbol: string) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/portfolio/?symbol=${symbol}`
    );

    return data as PortfolioPost;
  } catch (err) {
    console.log(err);
  }
};

export const getPortfolioRequest = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/portfolio/`
    );

    return data as PortfolioGet[];
  } catch (err) {
    console.log(err);
  }
};
