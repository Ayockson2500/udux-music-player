import styled from "styled-components";

const StyledNavBar = styled.div`
   background: ${props => props.theme.background.primaryDarkBg};
   .navBar {
       padding: 18px;
       display: flex;
       align-items: center;
   }

   .display-flex {
        display: flex;
        align-items: center;
    }
    .leftAngleIcon-wrapper {
        margin-right: 15px;
        background: ${props =>props.theme.background.secondaryDarkBg};
    }
    .rightAngleIcon-wrapper {
        background: ${props =>props.theme.background.secondaryDarkBg};
    }
    .search-field {
        margin-left: 30px;
        display: flex;
        align-items: center;
        border: 1px solid ${props =>props.theme.color.mainAshColor};
        width: 300px;
        padding: 0 5px;
    }
    .search-field input {
        height: 30px;
        width: 95%;
        border: none;
        outline: none;
        background: transparent;
        color: white;
        padding: 0 10px;
    }
    .mobileNavBar {
       display: none;
    }

    /* media query */
    @media screen and (max-width: 450px) {
        .hideMainNavBar {
            display: none;
        }
        .mobileNavBar {
        background: ${props =>props.theme.background.secondaryDarkBg};
        padding: 10px 20px;
        display: block;
    }
    }
`

export default StyledNavBar;