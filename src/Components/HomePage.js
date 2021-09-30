import React from "react";
import MenuSidebar from "./MenuSidebar";
import NavBar from "./NavBar";
import "../Styles.css";
import Categories from "./Categories";
import VideoList from "./VideoList";
import MenuBar from "./MenuBar";

const HomePage = (props) => {
  console.log('home',props)
  return (
    <div className="mainClass">
      <NavBar />
      
      <div
        style={{
          backgroundColor: "#f7f7f7",
          display: "grid",
          gridTemplateColumns: "13% 87%",
        }}
      >
        <MenuSidebar />
        <div>
          <Categories />
          <div className="videos">
            <section className="video-section">
              <VideoList />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
