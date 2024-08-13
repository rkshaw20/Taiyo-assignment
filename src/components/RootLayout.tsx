import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-[auto_1fr] h-screen w-full">
      {/* Header */}
      <header className="row-span-1 col-span-1 md:col-span-2 bg-purple-600 text-white p-4 flex justify-between items-center shadow-lg">
        <Header />
      </header>

      {/* Sidebar */}
      <nav className="hidden md:block row-span-1 col-span-1 bg-purple-200 text-gray-800 p-4 shadow-md">
        <Sidebar />
      </nav>
      {/* Main content */}
      <main className="row-span-1 col-span-1 p-2 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
