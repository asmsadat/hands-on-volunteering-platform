import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png"

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Edit Profile", href: "/edit-profile" },
  { name: "History", href: "/history" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const logout = true;

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left part */}
        <div className="flex items-center md:gap-16 gap-4">
          <div className="relative flex items-center md:space-x-3 space-x-2">
            {/* Logo */}
              <img src={logo} alt="Logo" className="w-20" />
          </div>
        </div>

        {/* Middle part */}
        <div className="relative flex items-center space-x-4 md:space-x-6 text-base md:text-lg font-medium text-gray-900">
          <Link to="/">Event</Link>
          <Link to="/">Help</Link>
          <Link to="/">Team</Link>
        </div>

        {/* Right part */}
        <div className="flex items-center md:gap-16 gap-4">
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <FaUser className="size-6" />
            </button>
            {/* show dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white  shadow-lg rounded-md z-40">
                <ul className="py-2">
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
