import React from "react";
import Header from "./Header";
import "../../assets/css/home.scss";
import LandingPage from "../landing_page/LandingPage";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Home;
