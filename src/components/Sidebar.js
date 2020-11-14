import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <SidebarRow Icon={EmojiFlagIcon} title="Add Student" />
      </Link>
      <Link to="/viewstudents">
        <SidebarRow Icon={ChatIcon} title="View Student" />
      </Link>
      <Link to="/event">
        <SidebarRow Icon={PeopleIcon} title="Events" />
      </Link>
      <Link to="/account">
        <SidebarRow Icon={StoreFrontIcon} title="Account" />
      </Link>
      <Link to="/result">
        <SidebarRow Icon={VideoLibraryIcon} title="Result" />
      </Link>
    </div>
  );
}

export default Sidebar;
