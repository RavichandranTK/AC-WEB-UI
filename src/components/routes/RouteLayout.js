import React from "react";
import { Outlet } from "react-router-dom";
import { AppMain } from "../AppMain";

export const RouteLayout = () => {
  return (
    <AppMain>
      <Outlet />
    </AppMain>
  );
};
