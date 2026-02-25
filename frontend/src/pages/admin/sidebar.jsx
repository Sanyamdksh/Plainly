import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, PlusCircle, Package } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const handleLogout = async () => {
    try {
      await fetch("https://plainly-backend.onrender.com/logout", {
        method: "GET",
        credentials: "include",
      });
      setUser(null);
      navigate("/");
    } catch {
      toast.error("Logout failed");
    }
  };
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

      <button
        className="mt-auto rounded-md border p-2 border-red-400 text-red-500 hover:bg-red-100 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
