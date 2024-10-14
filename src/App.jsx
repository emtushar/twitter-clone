import React from "react";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/features/authSlice";
function App() {
  const dispatch = useDispatch();
  dispatch(getCurrentUser());
  return (
    <div className="">
      <div className="flex justify-between mx-auto   min-h-[100vh] w-[85%] ">
        <div className="w-[20%]">
          <Leftbar />
        </div>
        <div className="flex-1 mx-4 border border-gray-200">
          <Outlet />
        </div>
        <div className="w-[30%]">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default App;
