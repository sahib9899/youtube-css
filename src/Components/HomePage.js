import React from "react";
import MenuSidebar from "./MenuSidebar";
import NavBar from "./NavBar";
import "../Styles.css";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
        <MenuSidebar />
        <div>
          <Categories />
          <div className="videos">
            <section class="video-section">
              <artical className="video-container">
                <a href="#">
                  <img
                    class="thumbnail-image"
                    src="http://unsplash.it/250/150?gravity=center"
                  />
                </a>
                <div className="video-bottom-section">
                  <a href="#">
                    <img
                      class="channel-icon"
                      src="http://unsplash.it/36/36?gravity=center"
                    />
                  </a>
                </div>
                <div className="video-details">
                  <a href="#" className="video=title">
                    Video title
                  </a>
                  <a href="#" className="video-channel-name">
                    chanel name
                  </a>
                  <div className="video-metadata">
                    <span>15K views</span>&nbsp; •&nbsp;
                    <span>5 Days ago</span>
                  </div>
                </div>
              </artical>

              <artical className="video-container">
                <a href="#">
                  <img
                    class="thumbnail-image"
                    src="http://unsplash.it/250/150?gravity=center"
                  />
                </a>
                <div className="video-bottom-section">
                  <a href="#">
                    <img
                      class="channel-icon"
                      src="http://unsplash.it/36/36?gravity=center"
                    />
                  </a>
                </div>
                <div className="video-details">
                  <a href="#" className="video=title">
                    Video title
                  </a>
                  <a href="#" className="video-channel-name">
                    chanel name
                  </a>
                  <div className="video-metadata">
                    <span>15K views</span>&nbsp; •&nbsp;
                    <span>5 Days ago</span>
                  </div>
                </div>
              </artical>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
