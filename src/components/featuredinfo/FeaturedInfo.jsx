import React from "react";
import "./featuredInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2455</span>
          <span className="featuredMoneyRate">
            -2.45 <ArrowDownwardIcon />
          </span>
        </div>
        <span className="featureSub">Compared to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$245</span>
          <span className="featuredMoneyRate">
            -1.45 <ArrowDownwardIcon />
          </span>
        </div>
        <span className="featureSub">Compared to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5545</span>
          <span className="featuredMoneyRate">
            + 2.45 <ArrowUpwardIcon />
          </span>
        </div>
        <span className="featureSub">Compared to last Month</span>
      </div>
    </div>
  );
}

export default Featuredinfo;
