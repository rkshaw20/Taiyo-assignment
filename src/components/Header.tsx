import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" relative w-full flex justify-center items-center">
      <div className="text-2xl font-bold">Header</div>
      <IoIosMenu
        className="absolute right-0 top-0 text-3xl block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen && (
        <nav
          className={` md:hidden absolute top-5 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg   `}
        >
          <div className="flex flex-col ">
            <Link
              to="/"
              className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg "
            >
              Contacts
            </Link>
            <hr className="border-gray-300" />
            <Link
              to="/analytics"
              className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Analytics
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
