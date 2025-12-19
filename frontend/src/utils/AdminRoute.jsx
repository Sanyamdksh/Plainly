import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ user }) => {
  if (!user) return <Navigate to="../pages/AuthContainer" replace />;

  if (user.role !== "admin")
    return <Navigate to="../pages/admin/AccessDenied" />;

  return <Outlet />;
};

export default AdminRoute;
