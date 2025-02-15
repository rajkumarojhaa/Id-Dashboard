import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <RingLoader size={60} color="#4A90E2" loading={true} />
    </div>
  );
};

export default Loader;
