import styled from "styled-components";

const StyledSideBar = styled.div`
@font-face {
  font-family: "Bw Modelica";
  src: url(../../assets/fonts/modelicaFont/woff/BwModelica-Bold.woff);
}
.sideBar {
    background: ${props => props.theme.background.primaryDarkBg};
    width: 20%;
    height: 100vh;
    position: fixed;
}

    .comon-padding {
        padding: 10px 20px;
    }
    .logo-wrapper {
        margin-bottom: 10px;
        background: ${props =>props.theme.background.secondaryDarkBg};
        padding: 10px 20px;
    }
    .logo-wrapper p {
        color: ${props => props.theme.color.mainLightColor};
        margin-left: 10px;
    }

    a {
        text-decoration: none;
        font-size: ${props => props.theme.fontsize.fontSize16};
        color: ${props => props.theme.color.mainLightColor};
        font-size: 12px;
        font-family: "Bw Modelica";
    }
    a:hover {
        color: ${props => props.theme.color.mainBrownColor};
    }
    .active-menu a {
        color: ${props => props.theme.color.mainBrownColor};
    }
    .section-three a {
        font-weight: ${props => props.theme.fontWeight.fontWeight500};
    }
    .display-flex {
        display: flex;
        align-items: center;
    }
    .display-flex-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .section-one {
        margin-bottom: 12px;
    }
    .section-two {
        margin-bottom: 12px;

    }
     .section img {
        width: 10px;
        margin-right: 8px;
    }
    .icons {
         margin-left: 10px; 
    }
    .py {
        padding: 4px 0;
    }
    .active-menu {
        color: ${props => props.theme.color.mainBrownColor};
    }
    .active-menu img {
        color: ${props => props.theme.color.mainBrownColor};
    }
    .playlist-wrapper {
        margin-bottom: 10px;
    }
    
    .mobileSideBar {
        background: ${props => props.theme.background.primaryDarkBg};
        display: none;
        align-items: center;
        justify-content: space-around;
        height: 16%;
        position: fixed;
        bottom: 0;
        z-index: 1000;
        width:100%;
    }

    @media screen and (max-width: 450px) {
        .sideBar {
            display: none;
        }
        .mobileSideBar {
            display: flex;
        }
}
`

export default StyledSideBar;