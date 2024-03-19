import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <span className="sr-only">Loading...</span>
        <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-gray-100"></div>
      </div>
    </Html>
  );
};

export default Loader;
