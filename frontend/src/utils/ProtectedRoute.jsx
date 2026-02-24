import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
