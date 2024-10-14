import React from "react";
import { FiSearch } from "react-icons/fi";
import Avatar from "react-avatar";
function Rightbar() {
  return (
    <>
      <div className="p-4 fixed">
        <div className="flex rounded-md  bg-gray-200  p-2">
          <FiSearch size={20} />
          <input
            className="outline-none ml-4 bg-transparent"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className=" p-3 border-2   border-gray-300 rounded-lg mt-10">
          <h1 className="font-bold text-xl mb-4">Who to Follow</h1>
          <div className="flex justify-between  items-center mb-2">
            <div className=" flex">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qJUppeWCh-LyaKCFWgM7rnqaoQ8mNQGJcQ&s"
                size="42"
                round={true}
                className="  object-cover"
              />
              <div className="ml-2">
                <h1 className=" font-semibold text-base">Tushar Kaushik</h1>
                <p className=" text-gray-500">@emtushar</p>
              </div>
            </div>
            <div className="">
              <button className="bg-black text-white p-2 px-6 rounded-full">
                Follow
              </button>
            </div>
          </div>
          <div className="flex  justify-between items-center mb-2">
            <div className="flex">
              <Avatar
                src="https://img.freepik.com/premium-vector/cute-boy-smiling-cartoon-kawaii-boy-illustration-boy-avatar-happy-kid_1001605-3447.jpg"
                size="42"
                round={true}
                className=" object-cover"
              />
              <div className="ml-2">
                <h1 className=" font-semibold text-base">Tanishk Sharma</h1>
                <p className=" text-gray-500">@tanishk_sh</p>
              </div>
            </div>
            <div className="">
              <button className="bg-black text-white p-2 px-6 rounded-full">
                Follow
              </button>
            </div>
          </div>
          <div className="flex justify-between  items-center mb-2">
            <div className="flex">
              <Avatar
                className=" object-cover"
                size="42"
                round={true}
                src="https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vZTViYTZhOTEtYmNlNy00YjQxLWFkN2YtZGMzODk1MzNkOGQ0LmpwZWc.webp"
              />
              <div className="ml-2">
                <h1 className=" font-semibold text-base">Milind Kaushik</h1>
                <p className=" text-gray-500">@milind129</p>
              </div>
            </div>
            <div className="">
              <button className="bg-black text-white p-2 px-6 rounded-full">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rightbar;
