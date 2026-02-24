import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-white/80 backdrop-blur-md border-b border-amber-200 px-8 py-4 flex items-center justify-between">
      <h3 className="text-xl font-semibold text-stone-700">Owner Dashboard</h3>

      <div className="flex items-center gap-4">
        <div className="h-9 w-9 rounded-full bg-amber-200 flex items-center justify-center text-stone-700 font-medium">
          S
        </div>
      </div>
    </div>
  );
};

export default Topbar;
