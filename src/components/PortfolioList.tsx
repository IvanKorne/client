import { SyntheticEvent } from "react";
import CardPortfolio from "./Card/CardPortfolio";
import { PortfolioGet } from "../lib/types";

type PortfolioListProps = {
  portfolios: PortfolioGet[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
};

const PortfolioList = ({
  portfolios,
  onPortfolioDelete,
}: PortfolioListProps) => {
  return (
    <section id="portfolio">
      <h2 className="mt-3 mb-3 text-3xl font-semibold text-center md:text-4xl">
        My Portfolio
      </h2>
      <div className="relative flex flex-col items-center max-w-5xl px-10 mx-auto mb-5 space-y-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
        <>
          {portfolios.length > 0 ? (
            portfolios.map((portfolio) => {
              return (
                <CardPortfolio
                  portfolio={portfolio}
                  onPortfolioDelete={onPortfolioDelete}
                />
              );
            })
          ) : (
            <h3 className="mt-3 mb-3 text-xl font-semibold text-center md:text-xl">
              Your portfolio is empty.
            </h3>
          )}
        </>
      </div>
    </section>
  );
};

export default PortfolioList;
