import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Layout.css';
export default function Layout({user,setUser}) {
  return (
    <div className="app-container">
      <Navbar user={user} setUser={setUser} />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer user={user}/>
    </div>
  );
}
