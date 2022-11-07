import React, { useEffect, useState } from "react";
import StyledNavBar from "./StyledNavBar.styles";
import leftAngleIcon from "../../assets/icons/leftAngleIcon.svg";
import righttAngleIcon from "../../assets/icons/rightAngleIcon.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import currentUserImage from "../../assets/img/userImage.svg";

const NavBar = () => {
  const [mobileNavBar, setMobileNavBar] = useState('mobileNavBar')

  useEffect(() => {
    listenToScroll()
  })
  const listenToScroll = (e) => {
    window.addEventListener('scroll', e => {
   setMobileNavBar(mobileNavBar)
    })
  }
  return (
    <StyledNavBar id="navBar">
      <div className="navBar hideMainNavBar">
        <div className="display-flex">
          <div className="leftAngleIcon-wrapper">
            <img width={"10px"} src={leftAngleIcon} alt="" />
          </div>
          <div>
            <img
              className="rightAngleIcon-wrapper"
              width={"10px"}
              src={righttAngleIcon}
              alt=""
            />
          </div>
        </div>
        <div className="search-field">
          <img src={searchIcon} alt="" />
          <input type="text" />
        </div>
      </div>
      <div onScroll={(e) =>listenToScroll(e)} className="mobileNavBar">
        <img width={"50px"} src={currentUserImage} alt="userPhoto" />
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
