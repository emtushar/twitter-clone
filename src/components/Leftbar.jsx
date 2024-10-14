import React from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiMessageSquare,
  FiBookmark,
  FiBell,
  FiHome,
  FiCompass,
  FiSettings,
} from "react-icons/fi";

function Leftbar() {
  return (
    <div className=" fixed">
      <div className=" mt-4 p-4">
        <img
          className="w-[36px]"
          alt=""
          src="data:image/png;base64,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"
        />
      </div>
      <div>
        <Link to="/">
          <div className=" flex items-center mt-4 p-4 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
            <FiHome size={28} />
            <h1 className="ml-4 text-xl font-semibold">Home</h1>
          </div>
        </Link>
        <Link to="/explore">
          <div className=" flex items-center mt-4 p-4 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
            <FiCompass size={28} />
            <h1 className="ml-4 text-xl font-semibold">Explore</h1>
          </div>
        </Link>
        <Link to="/notifications">
          <div className=" flex items-center mt-4 p-4 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
            <FiBell size={28} />
            <h1 className="ml-4 text-xl font-semibold">Notifications</h1>
          </div>
        </Link>
        <Link to="/message">
          <div className=" flex items-center mt-4 p-4 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
            <FiMessageSquare size={28} />
            <h1 className="ml-4 text-xl font-semibold">Message</h1>
          </div>
        </Link>
        <Link to="/profile">
          <div className=" flex items-center mt-4 p-4 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
            <FiUser size={28} />
            <h1 className="ml-4 text-xl font-semibold">Profile</h1>
          </div>
        </Link>
        <Link to="/bookmark">
          <div className=" flex items-center mt-4 p-4 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
            <FiBookmark size={28} />
            <h1 className="ml-4 text-xl font-semibold">Bookmarks</h1>
          </div>
        </Link>
        <Link to="/settings">
          <div className=" flex items-center mt-4 p-4 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
            <FiSettings size={28} />
            <h1 className="ml-4 text-xl font-semibold">Settings</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Leftbar;
