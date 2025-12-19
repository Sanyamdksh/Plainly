import React from "react";
import access from "../../assets/access-denied.gif";

const AccessDenied = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <img src={access} alt="Access Denied" />
      <p className="text-gray-600 mt-2">
        You do not have permission to view this page.
      </p>
    </div>
  );
};

export default AccessDenied;
