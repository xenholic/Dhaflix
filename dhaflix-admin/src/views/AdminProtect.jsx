import React from "react";
import { Outlet } from "react-router-dom";

function AdminOnly() {
  return <Outlet />;
}

export { AdminOnly };
