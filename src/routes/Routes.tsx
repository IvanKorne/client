import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import SearchPage from "../pages/SearchPage";
import CompanyPage from "../pages/CompanyPage";
import IncomeStatement from "../components/IncomeStatement";
import DesignPage from "../pages/DesignPage";
import CompanyProfile from "../components/CompanyProfile";
import BalancesSheet from "../components/BalancesSheet";
import CashflowStatement from "../components/CashflowStatement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "design",
        element: <DesignPage />,
      },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "income-statement", element: <IncomeStatement /> },
          { path: "balance-sheet", element: <BalancesSheet /> },
          { path: "cashflow-statement", element: <CashflowStatement /> },
        ],
      },
    ],
  },
]);

const Routes = () => {
  return <div>Routes</div>;
};

export default Routes;
