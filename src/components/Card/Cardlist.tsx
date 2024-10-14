import { SyntheticEvent } from "react";
import { CompanySearch } from "../../lib/types";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

type CardlistProps = {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
};

const Cardlist = ({ searchResults, onPortfolioCreate }: CardlistProps) => {
  return (
    <div>
      {searchResults.map((company) => (
        <Card
          id={company.symbol}
          company={company}
          key={uuidv4()}
          onPortfolioCreate={onPortfolioCreate}
        />
      ))}
    </div>
  );
};

export default Cardlist;
