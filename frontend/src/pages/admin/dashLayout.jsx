import React, { useEffect, useState } from "react";
import Dashboard from "./dashboard";

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
    <p className="text-sm text-stone-500">{title}</p>
    <h2 className="text-2xl font-semibold text-stone-800 mt-2">{value}</h2>
  </div>
);

const DashLayout = () => {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    fetch("https://plainly-backend.onrender.com/admin/analytics", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Dashboard>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-800">Welcome back </h1>
        <p className="text-stone-600 mt-2">Manage your products from here.</p>
      </div>

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard title="Total Products" value={stats.totalProducts} />
          <StatCard title="Orders" value={stats.totalOrders} />
          <StatCard title="Revenue" value={`₹${stats.totalRevenue}`} />
        </div>
      )}

      {/* Quick Action */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h3 className="text-lg font-semibold text-stone-800 mb-4">
          Quick Actions
        </h3>

        <button className="bg-stone-800 text-white px-6 py-3 rounded-xl hover:bg-stone-700 transition">
          + Add New Product
        </button>
      </div>
    </Dashboard>
  );
};

export default DashLayout;
