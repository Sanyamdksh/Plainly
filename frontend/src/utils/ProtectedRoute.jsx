import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  if (loading) return <Loader />;

  if (!user) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
