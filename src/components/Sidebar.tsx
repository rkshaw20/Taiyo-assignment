import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="flex flex-col gap-3 w-[120px] h-full  ">
      <Link to="/" className="">
        Contacts
      </Link>
      <hr className="border-t-2 border-gray-600 " />
      <Link to="/analytics" className="">
        Analytics
      </Link>
    </nav>
  );
};

export default Sidebar;
