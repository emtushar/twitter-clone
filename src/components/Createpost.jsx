import React, { useState } from "react";
import Avatar from "react-avatar";
import EmojiPicker from "emoji-picker-react";
import { FiImage, FiSmile, FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineGifBox,
  MdOutlineLocationOn,
  MdOutlinePoll,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectPostStatus } from "../store/features/authSlice.js";
import { createPost, getAllPosts } from "../store/features/authSlice";
function Createpost({ avatar }) {
  const [blah, setBlah] = useState("");
  const [image, setImage] = useState("");
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [tweet, setTweet] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePreviewImage = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImage(file);
      setBlah(URL.createObjectURL(file));
    }
  };
  const handleEmojiPicker = () => {
    setEmojiPicker(true);
  };
  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    tweet ? formData.append("caption", tweet) : "";
    image ? formData.append("mediaFile", image) : "";
    if (!formData) {
      return;
    }
    dispatch(createPost(formData));
    setTweet("");
    setBlah("");
    setImage("");
    navigate("/profile");
  };
  return (
    <>
      <div className=" flex items-center  border-b border-gray-200 ">
        <div className="  w-[50%] ">
          <h1 className=" font-semibold text-lg text-center p-3   hover:bg-gray-400 hover:cursor-pointer">
            For you
          </h1>
        </div>
        <div className="  w-[50%]">
          <h1 className=" font-semibold text-lg p-3 text-center  hover:bg-gray-400 hover:cursor-pointer ">
            Following
          </h1>
        </div>
      </div>
      <div className="border-b border-gray-200">
        <div className="p-5 px-3 flex ">
          <Avatar
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4crgR1B9dCVn1Bbt0DtBmM0VImDGfo0vX3g&s"
            src={avatar}
            size={48}
            round={true}
            className="object-cover"
          />
          {/* <input
            className="ml-3  bg-transparent outline-none text-2xl   font-normal"
            type="text"
            placeholder="What is happening?!"
          /> */}

          <textarea
            className="ml-3  w-[90%] resize-none  bg-transparent outline-none text-2xl   font-normal"
            type="text"
            placeholder="What is happening?!"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />
        </div>
        <div className="w-full p-4 flex  justify-center">
          {blah && (
            <img
              src={blah}
              className="  rounded-md w-[80%] p-[1px]  h-[550px] object-cover border-4 border-black"
            />
          )}
        </div>
        <div className="mt-2 flex justify-between px-10 ">
          {emojiPicker ? (
            <EmojiPicker />
          ) : (
            <div className=" flex gap-2">
              <div>
                <input
                  type="file"
                  name="file"
                  onChange={handlePreviewImage}
                  id="file"
                  className="inputFile  hidden"
                />
                <label htmlFor="file">
                  <FiImage size={24} />
                </label>
              </div>
              <MdOutlineGifBox size={26} />
              <MdOutlinePoll size={26} />
              <FiSmile onClick={handleEmojiPicker} size={24} />
              <FiCalendar size={24} />
              <MdOutlineLocationOn size={26} />
            </div>
          )}
          <button
            className=" bg-blue-500 text-white p-2 px-6 font-medium rounded-full  mb-2"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default Createpost;
