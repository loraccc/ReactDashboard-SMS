import "./home.css";
import React from "react";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid datakey="activeUser" />
    </div>
  );
}

export default Home;
