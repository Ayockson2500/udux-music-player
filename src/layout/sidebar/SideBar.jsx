import React from "react";
import { Link } from "react-router-dom";
import {
  sectionOneSideBarElements,
  sectionThreeSideBarElements,
  sectionTwoSideBarElements,
  sideBarMobileElements,
} from "./sidebarElements";
import StyledSideBar from "./StyledSideBar.styles";
import currentUserImage from "../../assets/img/userImage.svg";
import playlistIcon from "../../assets/icons/playlistIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";

const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="sideBar">
        <div className="display-flex logo-wrapper">
          <img width={"50px"} src={currentUserImage} alt="userPhoto" />
          <p className="user-name">Hey! Aleem</p>
        </div>
        <div className="comon-padding">
          <div className="section-one section">
            {sectionOneSideBarElements.map((item, idx) => (
              <div className="display-flex py" key={idx}>
                <img src={item.icon} alt="" />
                <Link to={item.url}>{item.title}</Link>
              </div>
            ))}
          </div>
          <div className="section-two section">
            {sectionTwoSideBarElements.map((item, idx) => (
              <div className={`display-flex py ${item.classNme}`} key={idx}>
                <img src={item.icon} alt={item.title} />
                <Link to={item.url}>{item.title}</Link>
                <img className="icons" src={item.icons} alt={""} />
              </div>
            ))}
          </div>
          <div className="section-three section">
            <div className="display-flex-between playlist-wrapper">
              <div>
                <img src={playlistIcon} alt="playlist" />
                <Link>My Playlists</Link>
              </div>
              <img src={searchIcon} alt="search" />
            </div>
            {sectionThreeSideBarElements.map((item, idx) => (
              <div className={"py"} key={idx}>
                <Link to={item.url}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mobileSideBar">
        {sideBarMobileElements.map((item, idx) => (
          <div key={idx}>
            <Link to={item.url}>
              <img src={item.icon} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
