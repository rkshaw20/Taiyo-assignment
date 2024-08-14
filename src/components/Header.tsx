import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="text-2xl font-bold">
        {location.pathname === "/" ? "Contacts" : "Analytics"}
      </div>
      <div ref={iconRef} className="absolute right-0 top-0">
        <IoIosMenu
          className="text-3xl block md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="md:hidden absolute top-5 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg"
        >
          <div className="flex flex-col">
            <Link
              to="/"
              className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-lg"
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
