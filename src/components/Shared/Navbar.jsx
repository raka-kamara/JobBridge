import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import img from "../../assets/job.png";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);


  const [isOpen, setIsOpen] = useState(false);
  const navOptions = (
    <>
      <li>
        <Link to="/" className="text-[#063840] font-semibold">Home</Link>
      </li>
      {user && <li><Link to="/dashboard" className="text-[#063840] font-semibold">Dashboard</Link></li>}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-[#F1F8E9] fixed z-10 max-w-screen-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-[#2E7D32]">
          <img className="w-10 hidden md:block" src={img} alt="logo" />
          JobBridge
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      {
        <div className="navbar-end">
          {user ? (
            <>
              <div className="relative group">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <span className="absolute left-0 -bottom-6 text-sm text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {user?.displayName}
                </span>
              </div>
              <button onClick={handleLogOut} className="btn btn-ghost text-[#063840]">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost text-[#063840]">
                Login
              </Link>
            </>
          )}
        </div>
      }
    </div>
  );
}

export default Navbar;
