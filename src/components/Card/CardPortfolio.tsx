import { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio";
import { Link } from "react-router-dom";
import { PortfolioGet } from "../../lib/types";

type CardPortfolioProps = {
  portfolio: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
};

const CardPortfolio = ({
  portfolio,
  onPortfolioDelete,
}: CardPortfolioProps) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${portfolio.symbol}/company-profile`}
        className="pt-6 text-xl font-bold"
      >
        {portfolio.symbol}
      </Link>
      <DeletePortfolio
        portfolio={portfolio.symbol}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio;
