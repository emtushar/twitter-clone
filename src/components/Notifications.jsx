import React from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
function Notifications() {
  return (
    <>
      <div className=" flex items-center m-4 mb-6 justify-between">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <Link to="/settings">
          <FiSettings size={20} />
        </Link>
      </div>
      <div className="flex justify-around p-2 border-b-2 border-gray-200">
        <h1 className=" font-semibold text-lg">All</h1>
        <h1 className=" font-semibold text-lg">Verified</h1>
        <h1 className=" font-semibold text-lg">Mentions</h1>
      </div>
      <h2 className="text-green-600 text-2xl">Comming Soon!!</h2>
    </>
  );
}

export default Notifications;
