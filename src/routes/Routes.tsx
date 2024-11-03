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
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "search",
        element: (
          <ProtectedRoutes>
            <SearchPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "design",
        element: <DesignPage />,
      },
      {
        path: "company/:ticker",
        element: (
          <ProtectedRoutes>
            <CompanyPage />
          </ProtectedRoutes>
        ),
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
