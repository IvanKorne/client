import { Link } from "react-router-dom";
import { CompanyTenK } from "../lib/types";

type TenKItemProps = {
  data: CompanyTenK;
};

const TenKItem = ({ data }: TenKItemProps) => {
  const fillingDate = new Date(data.fillingDate).getFullYear();
  return (
    <Link
      reloadDocument
      to={data.finalLink}
      type="button"
      className="inline-flex items-center p-4 text-white transition-all duration-300 rounded-lg bg-lightGreen hover:bg-green-400 hover:text-gray-200 hover:shadow-lg"
    >
      10K - {data.symbol} - {fillingDate}
    </Link>
  );
};

export default TenKItem;
