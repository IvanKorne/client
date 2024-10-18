import { SyntheticEvent } from "react";
import { CompanySearch } from "../../lib/types";
import AddPortfolio from "../AddPortfolio";
import { Link } from "react-router-dom";

type CardProps = {
  id: string;
  company: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
};

const Card = ({ company, id, onPortfolioCreate }: CardProps) => {
  return (
    <div className="flex flex-col w-full gap-2 mb-5">
      <img alt="company logo" />
      <div className="text-xl font-bold">
        <Link to={`/company/${company.symbol}/company-profile`}>
          {company.name} ({company.symbol})
        </Link>
      </div>
      <div>
        <p className="text-lg font-semibold">{company.currency}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quaerat
          id expedita? Eum quisquam nam nobis rem quasi tempore, quod hic
          assumenda ad laborum est molestias perferendis quas iusto possimus?
        </p>
        <p className="font-semibold">
          {company.exchangeShortName} - {company.stockExchange}
        </p>
      </div>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={company.symbol}
      />
    </div>
  );
};

export default Card;
