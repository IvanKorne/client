import { SyntheticEvent } from "react";

type DeletePortfolioProps = {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolio: string;
};

const DeletePortfolio = ({
  onPortfolioDelete,
  portfolio,
}: DeletePortfolioProps) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden value={portfolio} />
        <button className="block w-full py-3 text-white duration-200 bg-red-500 border-2 border-red-500 rounded-lg hover:text-red-500 hover:bg-white">
          X
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
