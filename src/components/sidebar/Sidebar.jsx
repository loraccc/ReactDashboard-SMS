import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ui className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Trends
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Timeline
            </li>
          </ui>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ui className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Reports
            </li>
          </ui>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ui className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Messages
            </li>
          </ui>
        </div>
      </div>
    </div>
  );
}

export default sidebar;
