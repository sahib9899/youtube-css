import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import VideoPlayer from "./VideoPlayer";
import NavBar from "./NavBar";
import "../Styles.css";
import Categories from "./Categories";
import stlogo from "./Images/stLogo.jpg";
import image1 from "./Images/video1.jpg"
import { connect } from "react-redux";
import moment from "moment";
import { ListGroup } from "react-bootstrap";

const HomePage = (props) => {
  const [Video, setVideo] = useState(null);
  const videoData = props.data;

  const showVideoList = () => {
    return videoData.map((video) => {
      const uploadTime = moment(video.uploadtime).diff(moment().format("YYYY-MM-DD HH:mm"), 'minutes');
      console.log('time',uploadTime)
      {Video !== null ? <VideoPlayer props={video.id} /> : console.log(null) }

      return (
        <artical className="video-container">
          <a href="#">
            <img
              className="thumbnail-image"
              src={video.thumbnail}
              onClick={() => setVideo(video.id)}
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
              <span>15K views</span>&nbsp; •&nbsp;
              <span>{uploadTime} minutes ago</span>
            </div>
            </div>
          </div>
        </artical>
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
          gridTemplateColumns: "15% 85%",
        }}
      >
        <MenuSidebar />
        <div>
          <Categories />
          <div className="videos">
            <section className="video-section">
              <artical className="video-container">
                <a href="#">
                  <img
                    className="thumbnail-image"
                    src={image1}
                    onClick={() => setVideo("nWJXdr0mQ0s")}
                  />
                </a>
                <div className="video-bottom-section">
                  <div>
                  <a href="#">
                    <img className="channel-icon" src={stlogo} />
                  </a>
                  </div>

                <div className="video-details">
                  <a href="#" className="video-title">
                    Title 1
                  </a>
                  <a href="#" className="video-channel-name">
                    Sahib Tank
                  </a>
                  <div className="video-metadata">
                    <span>15K views</span>&nbsp; •&nbsp;
                    <span>2 Days ago</span>
                  </div>
                </div>

                </div>
              </artical>
              {showVideoList()}
              {Video !== null ? <VideoPlayer props={Video} /> : ""}
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
