import React from "react";
import { FiUser, FiMail, FiEye } from "react-icons/fi";

function Signup() {
  return (
    <div className="flex  justify-center  py-10 gap-10  w-[70%] m-auto">
      <div className="w-[50%]   h-[700px] ">
        <img
          src="https://www.businessofapps.com/wp-content/uploads/2023/07/twitter-x-e1690183153269-1024x640.webp"
          alt="twitter-logo"
          className="object-cover h-full w-full rounded-lg"
        />
      </div>

      <form
        className="flex flex-col  justify-center gap-14  h-[700px] items-center  rounded-lg   bg-red-700 w-[50%]"
        action="/home"
        method="post"
      >
        <h1 className=" font-semibold text-4xl">Hello</h1>
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center">
            <FiUser size={30} />
            <input
              className=" outline-none bg-transparent text-lg p-2 px-4"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="flex items-center">
            <FiMail size={30} />
            <input
              className=" outline-none bg-transparent text-lg p-2 px-4"
              type="text"
              placeholder="Johndoe@gmail.com"
            />
          </div>
          <div className=" flex items-center">
            <FiEye size={30} />
            <input
              className=" outline-none bg-transparent text-lg p-2 px-4"
              type="password"
              name=""
              id=""
              placeholder="John@1344"
            />
          </div>
          <div>
            <button
              className="bg-black text-white p-3 text-center px-10 rounded-full"
              type="submit"
            >
              Signup
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
