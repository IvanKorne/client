import logo from "../assets/navbarLogo.png";

const Navbar = () => {
  return (
    <nav className="container relative p-6 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="logo" />
          <div className="hidden font-bold lg:flex">
            <button className="text-black hover:text-darkBlue">
              Dashboard
            </button>
          </div>
        </div>
        <div className="items-center hidden space-x-6 lg:flex text-back">
          <div className="hover:text-darkBlue">Login</div>
          <button className="px-8 py-3 font-bold text-white rounded bg-lightGreen hover:opacity-70">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
