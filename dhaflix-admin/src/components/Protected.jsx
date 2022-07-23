import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const isLogin = localStorage.getItem("access_token");
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return children;
}

export { Protected };
