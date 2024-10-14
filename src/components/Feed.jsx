import React, { useEffect } from "react";
import Createpost from "./Createpost.jsx";
// import Postcard from "./Postcard.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getAllPosts,
  selectPostStatus,
  selectUserData,
  getCurrentUser,
} from "../store/features/authSlice.js";
function Feed() {
  const posts = useSelector(selectAllPosts).docs;
  const status = useSelector(selectPostStatus);
  const userData = useSelector(selectUserData);
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
      <Createpost avatar={userData?.avatar} />
      {/* {posts?.map((post) => (
        <Postcard
          key={post._id}
          postId={post._id}
          postImg={post.mediaFile}
          postTweet={post.caption}
        />
      ))} */}
    </>
  );
}

export default Feed;
