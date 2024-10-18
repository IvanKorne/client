import { Link } from "react-router-dom";
import { FaHome, FaTable, FaTabletAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="absolute top-0 bottom-0 left-0 flex-row block w-64 px-6 py-4 transition-all duration-300 ease-in-out transform -translate-x-full bg-white shadow-xl flex-nowrap md:z-10 z-9999 md:translate-x-0">
      <div className="flex flex-col flex-wrap items-center justify-between w-full min-h-full px-0 mx-auto overflow-x-hidden overflow-y-auto">
        <div className="relative z-40 flex flex-col items-center flex-1 w-full h-auto mt-4 overflow-x-hidden overflow-y-auto bg-white rounded opacity-100">
          <div className="flex flex-col list-none md:flex-col md:min-w-full">
            <Link
              to="company-profile"
              className="flex items-center pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500"
            >
              <FaHome />
              <h6 className="ml-3">Company Profile</h6>
            </Link>
            <Link
              to="income-statement"
              className="flex items-center pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500"
            >
              <FaTable />
              <h6 className="ml-3">Income Statement</h6>
            </Link>
            <Link
              to="balance-sheet"
              className="flex items-center pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500"
            >
              <FaTabletAlt />
              <h6 className="ml-3">Balance Sheet</h6>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
