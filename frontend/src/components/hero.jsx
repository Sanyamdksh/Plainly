import React from "react";

const hero = () => {
  return (
    <div className="h-screen w-full bg-amber-100">
      <div className="flex flex-row items-center p-10">
        <h2 className="font-bold text-4xl text-stone-700">Plainly</h2>
        <div className="gap-x-10 flex flex-row ml-72 justify-center mt-2">
          <p className="text-lg font-normal text-black ">Product</p>
          <p className="text-lg font-normal text-black ">Reviews</p>
          <p className="text-lg font-normal text-black ">About Us</p>
        </div>
      </div>
    </div>
  );
};

export default hero;
