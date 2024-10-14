import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import SearchPage from "../pages/SearchPage";
import CompanyPage from "../pages/CompanyPage";
import IncomeStatement from "../components/IncomeStatement";

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
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          { path: "company-profile", element: <CompanyPage /> },
          { path: "income-statement", element: <IncomeStatement /> },
        ],
      },
    ],
  },
]);

const Routes = () => {
  return <div>Routes</div>;
};

export default Routes;
