import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";

export default function PrivateRouter() {
  let user=false;
  if(localStorage.getItem("user")==null){
    user=false;
  }
  else{
    user=true;
  }
  return <div>{user ? <Outlet user={user} /> : <Navigate to="/login" replace/>}</div>;
}
