import React from "react";
import Avatar from "react-avatar";
import {
  FiHeart,
  FiBookmark,
  FiBarChart2,
  FiShare,
  FiMessageCircle,
} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPosts, deletePost } from "../store/features/authSlice";
function Postcard({
  postId,
  postImg = "",
  postTweet = "",
  username,
  fullName,
  avatar,
}) {
  const dispatch = useDispatch();

  const handleDeletePost = () => {
    dispatch(deletePost(postId));
    dispatch(getAllPosts());
  };

  return (
    <div id={postId} className="p-4 flex border-b border-gray-200">
      <div>
        <Avatar
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4crgR1B9dCVn1Bbt0DtBmM0VImDGfo0vX3g&s"
          src={avatar}
          size={48}
          round={true}
          className="object-cover"
        />
      </div>
      <div className=" ml-4 ">
        <div className="flex  justify-between items-center p-1 ">
          <div className="flex gap-1 items-center ">
            <h1 className=" font-semibold text-lg">{fullName}</h1>
            <p className=" text-gray-500">@{username}</p>
          </div>
          <button onClick={handleDeletePost}>
            <h3>Delete</h3>
          </button>
        </div>
        <div className="text-base font-normal">{postTweet}</div>
        <div className="py-3">
          {postImg ? (
            <img className=" rounded-lg " src={postImg} alt="post-image" />
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center hover:cursor-pointer ">
            <FiMessageCircle size={24} />
            <h2 className="ml-2">0</h2>
          </div>
          <div className="flex items-center hover:cursor-pointer ">
            <FiShare size={24} />
            <h2 className="ml-2">0</h2>
          </div>
          <div className="flex items-center hover:cursor-pointer ">
            <FiHeart size={24} />
            <h2 className="ml-2">0</h2>
          </div>
          <div className="flex items-center hover:cursor-pointer ">
            <FiBarChart2 size={24} />
            <h2 className="ml-2">0</h2>
          </div>
          <div>
            <FiBookmark size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postcard;
