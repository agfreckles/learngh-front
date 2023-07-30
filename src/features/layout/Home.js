import React from "react";
import Header from "./Header";
import "../../assets/css/home.scss";
// import ad1 from "../../assets/images/lessons/ad1.jpg";
// import scholar from "../../assets/images/lessons/scholar.jpg";
// import shiba from "../../assets/images/shiba2.jpg";
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
