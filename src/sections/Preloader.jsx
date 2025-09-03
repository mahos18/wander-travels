import React from "react";
import {ScaleLoader} from "react-spinners";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#EFE5D7] text-white z-[9999]">
      <h1 className="text-3xl animate-pulse"><ScaleLoader color="black" /></h1>
    </div>
  );
};

export default Preloader;