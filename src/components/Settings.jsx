import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
function Settings() {
  return (
    <>
      <div>
        <h1 className=" text-2xl  font-semibold m-6">Settings</h1>
      </div>
      <div className="flex items-center  justify-around">
        <h1 className="text-4xl font-bold mr-6"> ←</h1>
        <div className="  p-2 border-2  rounded-full px-6 flex items-center w-[70%]">
          <FiSearch size={20} />
          <input
            type="text"
            className=" bg-transparent outline-none p-1"
            placeholder="Search Settings...."
          />
        </div>
      </div>
      <div className="mt-12 flex flex-col  w-full ">
        <div className=" flex items-center justify-between hover:bg-slate-200 p-4 ">
          <h1 className=" text-xl  font-medium">Account Information</h1>
          <Link>
            <h1 className=" text-xl">➤</h1>
          </Link>
        </div>
        <div className=" flex items-center justify-between hover:bg-slate-200 p-4 ">
          <h1 className=" text-xl  font-medium">Change Your Password</h1>
          <Link>
            <h1 className=" text-xl">➤</h1>
          </Link>
        </div>
        <div className=" flex items-center justify-between hover:bg-slate-200 p-4 ">
          <h1 className=" text-xl  font-medium">Deactivate Your Account</h1>
          <Link>
            <h1 className=" text-xl">➤</h1>
          </Link>
        </div>
        <div className=" flex items-center justify-between hover:bg-slate-200 p-4 ">
          <h1 className=" text-xl  font-medium">Privacy And Security</h1>
          <Link>
            <h1 className=" text-xl">➤</h1>
          </Link>
        </div>
        <div className=" flex items-center justify-between hover:bg-slate-200 p-4 ">
          <h1 className=" text-xl  font-medium">Manage Membership </h1>
          <Link>
            <h1 className=" text-xl">➤</h1>
          </Link>
        </div>
        <div className=" flex items-center justify-between hover:bg-slate-200 p-4 ">
          <h1 className=" text-xl  font-medium">Privacy Policy</h1>
          <Link>
            <h1 className=" text-xl">➤</h1>
          </Link>
        </div>
        <div className=" flex items-center justify-between hover:bg-slate-200 p-4 ">
          <h1 className=" text-xl  font-medium">Help And Support Center</h1>
          <Link>
            <h1 className=" text-xl">➤</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Settings;
