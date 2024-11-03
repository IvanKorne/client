import { Link } from "react-router-dom";
import logo from "../assets/navbarLogo.png";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="container relative p-6 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        <div className="items-center hidden space-x-6 lg:flex text-back">
          {isLoggedIn() ? (
            <button className="hover:text-darkBlue" onClick={() => logout()}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
          )}
          <Link
            to="/register"
            className="px-8 py-3 font-bold text-white rounded bg-lightGreen hover:opacity-70"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
