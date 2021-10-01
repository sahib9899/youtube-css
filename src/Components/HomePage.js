import React from "react";
import MenuSidebar from "./MenuSidebar";
import NavBar from "./NavBar";
import "../Styles.css";
import Categories from "./Categories";
import VideoList from "./VideoList";
import MenuBar from "./MenuBar";

import { connect } from "react-redux";

const HomePage = (props) => {
  const getTheme = props.themeData ? "mainClass-dark" : "mainClass";

  return (
    <React.Fragment>
      <div className={getTheme}>
        <NavBar />
        <div
          style={{
            backgroundColor: "#f7f7f7",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {props.menuData ? <MenuBar /> : <MenuSidebar />}
          <div
            style={{
              backgroundColor: "#f7f7f7",
              display: "flex",
              flexDirection: "column",
              flexBasis: "150rem",
            }}
          >
            <Categories />
            {/* <div className="videos"> */}
              {/* <section className="video-section-list"> */}
                <VideoList />
              {/* </section> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    themeData: state.themeChange,
    menuData: state.menuChange,
  };
};

export default connect(mapStateToProps, null)(HomePage);
