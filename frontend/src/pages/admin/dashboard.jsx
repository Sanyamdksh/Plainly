import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-stone-100">
      <div className="bg-amber-50 shadow-sm border-b border-amber-100 px-10 py-3">
        <div className="flex items-center gap-1 group">
          <img
            src={Logo}
            alt="Plainly logo"
            className="h-10 w-auto cursor-pointer"
            onClick={() => navigate("/")}
          />

          <h2
            className="font-bold text-3xl text-stone-700 group-hover:text-stone-900 transition cursor-pointer"
            onClick={() => navigate("/")}
          >
            Plainly
          </h2>
        </div>
      </div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
