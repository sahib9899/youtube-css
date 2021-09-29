import React from "react";
import MenuSidebar from "./MenuSidebar";
import NavBar from "./NavBar";
import "../Styles.css";
import Categories from "./Categories";
import stlogo from "./Images/stLogo.jpg";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const videoData = props.data;

  const showVideoList = () => {
    return videoData.map((video) => {
      return (
        <Link to={{pathname:'/videoPlayer', aboutProps:video }}  >
        <artical className="video-container">
          <a href="#">
            <img
              className="thumbnail-image"
              src={video.thumbnail}
             
            />
          </a>
          <div className="video-bottom-section">
            <div><a href="#">
              <img className="channel-icon" src={stlogo} />
            </a>
          </div>
          <div className="video-details">
            <a href="#" className="video-title">
              {video.title}
            </a>
            <a href="#" className="video-channel-name">
              Sahib Tank
            </a>
            <div className="video-metadata">
              <span>{video.views ? video.views : '108K'} views</span>&nbsp; •&nbsp;
              <span>{video.uploadTime !== '' ? video.uploadTime : 'Few seconds ago'}</span>
            </div>
            </div>
          </div>
        </artical>
        </Link>
      );
    });
  };
  return (
    <div>
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
           
              {showVideoList()}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.addVideoReducer,
  };
};

export default connect(mapStateToProps, null)(HomePage);
