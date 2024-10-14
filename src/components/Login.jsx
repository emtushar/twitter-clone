import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {
  userLogin,
  createUser,
  selectUserData,
} from "../store/features/authSlice";

import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [blah, setBlah] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if (isLogin) {
        dispatch(userLogin({ email, password }));
        if (!selectUserData) {
          navigate("/login");
        }
        navigate("/");
      }
      if (!isLogin) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("username", username);
        formData.append("fullName", fullname);
        formData.append("avatar", image);
        formData.append("password", password);
        dispatch(createUser(formData));
        if (!selectUserData) {
          navigate("/login");
        }
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleProfilePreview = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    if (file) {
      setImage(file);
      console.log(image);
      console.log(file);
      setBlah(URL.createObjectURL(file));
    }
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className=" text-stone-900 font-bold  font-mono text-5xl m-6">
        Happening Now
      </h1>
      <div className=" flex">
        <div className="bg-yellow-700">
          <img
            className="  w-[420px] h-[500px]"
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=sph"
            alt=""
          />
        </div>
        <div className="bg-stone-700 p-4 w-[420px] h-[500px]">
          <form
            onSubmit={submitHandler}
            className=" flex flex-col h-[90%] justify-around items-center  "
          >
            <div className="flex flex-col gap-4">
              {!isLogin ? (
                <>
                  {" "}
                  {blah && (
                    <img
                      src={blah}
                      alt=""
                      className=" w-20 h-20  rounded-full border-2 object-cover "
                    />
                  )}
                  {!blah && (
                    <div>
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className=" hidden "
                        onChange={handleProfilePreview}
                      />
                      <label
                        htmlFor="file"
                        className="rounded-md p-2 border-2 text-white"
                      >
                        Choose Profile
                      </label>
                    </div>
                  )}
                  <input
                    className=" outline-none border  text-white font-medium  border-white rounded-md bg-transparent text-lg p-2 px-4"
                    type="text"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                  <input
                    className=" outline-none border  text-white font-medium  border-white rounded-md bg-transparent text-lg p-2 px-4"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </>
              ) : null}
              <input
                className=" outline-none border  text-white font-medium  border-white rounded-md bg-transparent text-lg p-2 px-4"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className=" outline-none border text-white font-medium  border-white rounded-md bg-transparent text-lg p-2 px-4"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className=" bg-white p-3 px-6 text-lg font-medium rounded-xl"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <span className="text-lg text-white text-normal">
              {isLogin ? "Don't have an account?" : "Already Have an Account?"}
            </span>
            <span
              className="text-lg ml-2 hover:cursor-pointer text-blue-500 text-medium"
              onClick={toggleLogin}
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
