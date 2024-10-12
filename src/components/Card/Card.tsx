type CardProps = {
  companyName: string;
  ticker: string;
  price: number;
};

const Card = ({ companyName, ticker, price }: CardProps) => {
  return (
    <div className="flex flex-col gap-1 w-20 mb-5">
      <div className="font-bold text-xl">{companyName}</div>
      <div className="flex flex-row justify-between items-center">
        <p className="font-semibold text-lg">{ticker}</p>
        <p className="font-medium text-base">{price}</p>
      </div>
    </div>
  );
};

export default Card;
