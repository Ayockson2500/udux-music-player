import styled from "styled-components";

const StyledLikeSongs = styled.div`
    * {
    box-sizing: border-box;
   }
    main {
        background: ${props => props.theme.background.primaryDarkBg};
        padding: 8px;
    }
    header {
        width: 100%;
        position: relative;
    }
    .logo {
        position: absolute;
        top: 30px;
        left: 30px;
    }
    .title-text {
        color: white;
        margin: 20px 0;
    }
    .fw-400 {
    font-weight: 400;
}
.fw-600 {
    font-weight: 600;
}
.fw-700 {
    font-weight: 700;
}
.fs-10 {
    font-size: 10px;
}
.fs-16 {
    font-size: 16px;
}
.fs-28 {
    font-size: 28px;
}
    .activeArtist-name {
        position: absolute;
        top: 70px;
        right: 30px;
    }
    .main-artist-container {
        display: grid;
        grid-template-columns: repeat(6, 8rem);
        width: 100%;
        gap:.8rem;

}
.individual-artist-black-container {
    background-color: black;
    border: 1px solid ${props =>props.theme.color.mainAshColor};
    padding-top : 1.8rem;
    padding-bottom: 1rem;
}
.individual-artist-black-container-2 {
    background-color: black;
    border: 1px solid ${props =>props.theme.color.mainAshColor};
    padding-top : 1.8rem;
}

.individual-artist-yellow {
    background: linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%);
    height: 160px;
    position: relative;
    display: flex;
    align-items: flex-end;
 
}
.individual-artist-yellow-2 {
    background: linear-gradient(89.79deg, #AD4C1D -19.39%, #F6B726 123.38%);
    height: 80px;
    position: relative;
    display: flex;
    align-items: flex-end;
 
}
.yellow-artist-text-area {
    background:linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%);
    width:100%;
    padding:10px;
    position: absolute;
    top: 80px;
    z-index:44
}
.yellow-artist-text-area-2 {
    background:linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%);
    width:100%;
    position: absolute;
    top: 80px;
    z-index:44
}
.dialy-vibe {   
    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF
}
.daily-vibe-text-para {
    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.9);
    margin-top:5px;
}
.image-black-container {
    position: absolute;
    top: -1rem;
    height:100px;
    background-color: black;
    padding-left:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-top:5px;
    z-index:2;
    width:80%; 
    margin-left:10%;
    margin-right:10%; 
    display:flex;
    border: 1px solid ${props =>props.theme.color.mainAshColor};
}
.image-black-container-2 {
    position: absolute;
    top: -.9rem;
    height:100px;
    background-color: black;
    padding-left:10px;
    padding-right:10px;
    padding-bottom:10px;
    padding-top:5px;
    z-index:100;
    width:80%; 
    margin-left:10%;
    margin-right:10%; 
    display:flex;
    border: 1px solid ${props =>props.theme.color.mainAshColor};
    border-bottom: none;
}
.image-fit {
    width:100%;
    object-fit:contain;
}
.artist-image-container {
    width: 100%;
    height: auto;
}


/* Media querry section */
@media screen and (max-width: 770px) {
    .main-artist-container {
        grid-template-columns: repeat(3, 1fr);
    }
.logo {
        top: 15px;
        left: 15px;
    }
.activeArtist-name {
        top: 30px;
        right: 25px;
    }
.individual-artist-yellow {
    height: 180px;
}
.individual-artist-yellow-2 {
    height: 124px;
}
.image-black-container {
    height:130px;
    z-index:100;
}
.image-black-container-2 {
    height:140px;
}
.yellow-artist-text-area {
    position: absolute;
    top: 115px;
    z-index:44
}
}

@media screen and (max-width: 450px) {
    .main-artist-container {
        grid-template-columns: repeat(2, 1fr);
}
.logo {
        top: 8px;
        left: 10px;
    }
    .logo img {
        width: 50px;
    }
.activeArtist-name {
    top: 12px;
    right: 10px;
}
.activeArtist-name img {
    width: 110px;
}
.yellow-artist-text-area {
    padding: 0 10px;
    top: 95px;
}
.image-black-container {
    height:105px;
}
.individual-artist-yellow {
    height: 165px;
}
}

@media screen and (max-width: 330px) {
    .image-black-container-2 {
    height:105px;
}
.individual-artist-yellow-2 {
    height: 89px;
}
}
`

export default StyledLikeSongs