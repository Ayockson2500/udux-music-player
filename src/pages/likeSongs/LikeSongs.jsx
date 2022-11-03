import React from "react";
import Layout from "../../layout";
import StyledLikeSongs from "./StyledLikeSongs.styles";
import headerImage from "../../assets/img/bg-image.svg";
import logoText from "../../assets/img/TextLogo.svg";
import Omahlay from "../../assets/img/omahlay-name.svg";
import { likeSongsElements, likeSongsElementsTwo } from "./likeSongsEements";

const LikeSongs = () => {
  return (
    <StyledLikeSongs>
      <Layout>
        <main>
          <header>
            <img className="image-fit" width={"100%"} src={headerImage} alt="" />
            <div className="logo">
              <img width={"70px"} src={logoText} alt="" />
            </div>
            <div className="activeArtist-name">
              <img className="artistName" width={"200px"} src={Omahlay} alt="" />
            </div>
          </header>
          <section>
            <div className="title-text">Welcome Back!</div>
            <div className="main-artist-container ">
              {likeSongsElements.map((items, idx) => (
                <div className="individual-artist-black-container ">
                  <div className="individual-artist-yellow">
                    <div className="image-black-container">
                      <div className="artist-image-container">
                        <img src={items.image} className="image-fit" alt="" />
                      </div>
                    </div>
                    <div className="yellow-artist-text-area">
                      <div className="dialy-vibe">{items.title}</div>
                      <div className="daily-vibe-text-para"> {items.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <>
              <div className="title-text">Cheers to the Weekend</div>
              <div className="main-artist-container ">
                {likeSongsElementsTwo.map((items, idx) => (
                  <div className="individual-artist-black-container-2">
                    <div className="individual-artist-yellow-2">
                      <div className="image-black-container-2">
                        <div className="artist-image-container">
                          <img src={items.image} className="image-fit" alt="" />
                        </div>
                      </div>
                      <div className="yellow-artist-text-area-2">
                        <div className="dialy-vibe">{items.title}</div>
                        <div className="daily-vibe-text-para">
                          {" "}
                          {items.text}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </section>
        </main>
      </Layout>
    </StyledLikeSongs>
  );
};

export default LikeSongs;
