import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthStatus } from "../store/features/authSlice";
function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector(selectAuthStatus);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoading(false);
  }, [authStatus, navigate, authentication]);

  return <div>{loading ? <h1>Loading....</h1> : children}</div>;
}

export default AuthLayout;
