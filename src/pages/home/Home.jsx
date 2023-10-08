import "./home.css";
import React from "react";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
}

export default Home;
