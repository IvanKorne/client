import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <nav className="absolute top-0 bottom-0 left-0 flex-row block w-64 px-6 py-4 transition-all duration-300 ease-in-out transform -translate-x-full bg-white shadow-xl flex-nowrap md:z-10 z-9999 md:translate-x-0">
      <button className="absolute flex items-center justify-center w-6 h-10 text-xl leading-none bg-white border border-t border-b border-l-0 border-r border-transparent border-solid rounded-r cursor-pointer md:hidden text-blueGray-700 border-blueGray-100 top-1/2 -right-24-px focus:outline-none z-9998">
        <i className="fas fa-ellipsis-v"></i>
      </button>
      <div className="flex flex-col flex-wrap items-center justify-between w-full min-h-full px-0 mx-auto overflow-x-hidden overflow-y-auto">
        <div className="relative z-40 flex flex-col items-center flex-1 w-full h-auto mt-4 overflow-x-hidden overflow-y-auto bg-white rounded opacity-100">
          <div className="flex flex-col list-none md:flex-col md:min-w-full">
            <Link
              to="company-profile"
              className="flex pb-4 font-bold no-underline uppercase md:min-w-full text-blueGray-500 text-medium pt--1"
            >
              <FaHome />
              <h6 className="ml-3">Company Profile</h6>
            </Link>
            <div className="flex flex-col list-none md:flex-col md:min-w-full">
              <Link
                to="income-statment"
                className="flex pb-4 font-bold no-underline uppercase md:min-w-full text-blueGray-500 text-medium pt--1"
              >
                <FaHome />
                <h6 className="ml-3">Income Statement</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
