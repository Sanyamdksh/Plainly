import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-stone-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
