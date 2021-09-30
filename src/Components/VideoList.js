import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import stlogo from "./Images/stLogo.jpg";
import '../Styles.css'

const VideoList = (props) => {

  const videoData = props.data;

  const filter = () => {
    if (props.category == "All" || props.category == "") {
      return videoData;
    } else {
       return videoData.filter(
        (data) => props.category == data.category
      );
    }
  };

  function ShowList() {
    return filter().map((video) => {
      return (
        <Link to={{ pathname: "/videoPlayer", aboutProps: video }}>
          <artical className="video-container">
            <a href="#">
              <img className="thumbnail-image" src={video.thumbnail} />
            </a>
            <div className="video-bottom-section">
              <div>
                <a href="#">
                  <img className="channel-icon" src={stlogo} />
                </a>
              </div>
              <div className="video-details">
                <div href="#" className="video-title">
                  {video.title}
                </div>
                <a href="#" className="video-channel-name">
                  Sahib Tank
                </a>
                <div className="video-metadata">
                  <span>{video.views ? video.views : "108K"} views</span>&nbsp;
                  •&nbsp;
                  <span>
                    {video.uploadTime !== ""
                      ? video.uploadTime
                      : "Few seconds ago"}
                  </span>
                </div>
              </div>
            </div>
          </artical>
        </Link>
      );
    });
  }

  return (<React.Fragment>
      {ShowList()}
      </React.Fragment>);
};

const mapStateToProps = (state) => {
  return {
    data: state.addVideoReducer,
  };
};

export default connect(mapStateToProps, null)(VideoList);
