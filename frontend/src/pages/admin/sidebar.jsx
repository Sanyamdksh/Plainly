import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Package } from "lucide-react";

const Sidebar = () => {
  const base =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-stone-600 mb-2";

  return (
    <div className="w-64 min-h-screen bg-amber-100/70 backdrop-blur-sm border-r border-amber-200 p-6 flex flex-col">
      <h2 className="text-2xl font-semibold text-stone-700 mb-10">
        Owner Panel
      </h2>

      <NavLink
        to="/owner/dashboard"
        className={({ isActive }) =>
          `${base} ${
            isActive ? "bg-white shadow-sm text-stone-900" : "hover:bg-white/70"
          }`
        }
      >
        <LayoutDashboard size={18} />
        Dashboard
      </NavLink>

      <NavLink
        to="/owner/add-product"
        className={({ isActive }) =>
          `${base} ${
            isActive ? "bg-white shadow-sm text-stone-900" : "hover:bg-white/70"
          }`
        }
      >
        <PlusCircle size={18} />
        Add Product
      </NavLink>

      <NavLink
        to="/owner/manage-products"
        className={({ isActive }) =>
          `${base} ${
            isActive ? "bg-white shadow-sm text-stone-900" : "hover:bg-white/70"
          }`
        }
      >
        <Package size={18} />
        Manage Products
      </NavLink>

      <NavLink to="/" className="mt-auto text-red-400 hover:text-red-500 pt-10">
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
