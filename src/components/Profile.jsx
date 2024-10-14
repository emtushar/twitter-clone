import React, { useEffect } from "react";
import Avatar from "react-avatar";
import Postcard from "./Postcard.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getAllPosts,
  selectPostStatus,
  getCurrentUser,
} from "../store/features/authSlice.js";
function Profile() {
  const userData = useSelector((state) => state.auth.userData);
  const posts = useSelector(selectAllPosts);
  const status = useSelector(selectPostStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status == "idle") {
      dispatch(getCurrentUser());
      dispatch(getAllPosts());
      // console.log(posts, "here");
    }
  }, [dispatch, posts, status]);
  return (
    <>
      <div className="h-[60px] flex p-4 mb-2">
        <div className="font-bold text-4xl hover:cursor-pointer"> ←</div>
        <div className=" ml-8">
          <h1 className=" font-semibold text-lg">{userData?.fullName}</h1>
          <p className="text-base text-gray-500">
            {posts?.length + 1} <span>posts</span>
          </p>
        </div>
      </div>
      <div className="">
        <img
          src="https://cdn.mos.cms.futurecdn.net/xaycNDmeyxpHDrPqU6LmaD-650-80.jpg.webp"
          alt="cover-img"
          className=" w-full h-[220px]"
        />
      </div>
      <div className="absolute mt-[-80px] ml-[20px] border-4 border-black rounded-full">
        <Avatar
          src={userData?.avatar}
          className=" object-cover"
          size={150}
          round={true}
        />
      </div>
      <div className="ml-4 mt-[100px]">
        <h1 className="font-semibold text-lg">{userData?.fullName}</h1>
        <p className="text-base text-gray-500">@{userData?.username}</p>
        <div className="flex  gap-4">
          <h1 className="font-semibold text-gray-500 text-base">
            <span className="text-stone-800 text-lg font-bold">0 </span>
            Followers
          </h1>
          <h1 className="font-semibold text-gray-500 text-base">
            <span className="text-stone-800 text-lg font-bold">0 </span>
            Followings
          </h1>
        </div>
      </div>
      <div className="flex mt-8 justify-around border-b-2 py-2 border-slate-300">
        <h1 className="font-semibold text-lg">Posts</h1>
        <h1 className="font-semibold text-lg">Replies</h1>
        <h1 className="font-semibold text-lg">Highlights</h1>
        <h1 className="font-semibold text-lg">Articles</h1>
        <h1 className="font-semibold text-lg">Media</h1>
        <h1 className="font-semibold text-lg">Likes</h1>
      </div>
      <div>
        {posts
          ? posts.map((post) => (
              <Postcard
                key={post._id}
                postId={post._id}
                postImg={post?.mediaFile || ""}
                postTweet={post?.caption || ""}
                username={userData?.username}
                fullName={userData?.fullName}
                avatar={userData?.avatar}
              />
            ))
          : null}
      </div>
    </>
  );
}

export default Profile;
