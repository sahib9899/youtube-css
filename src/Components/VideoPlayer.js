import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import Categories from "./Categories";
import NavBar from "./NavBar";
import VideoList from "./VideoList";

const VideoPlayer = (props) => {
  const playVideoData = props.location.aboutProps;
  const videoData = props.data;

  const showVideoList = (player) => {
    return videoData.map((video) => {
      return (
        <Link to={{ pathname: "/videoPlayer", aboutProps: video.id }}>
          <div className={`${player}`}>
            <div>
              <a href="#">
                <img className="thumbnail-image" src={video.thumbnail} />
              </a>
            </div>
            <div className="video-bottom-section" style={{ marginLeft: "5px" }}>
              <div className="video-details">
                <a href="#" className="video-title">
                  {video.title}
                </a>
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
          </div>
        </Link>
      );
    });
  };

  const opts = {
    height: "720",
    width: "1280",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <React.Fragment>
      <div>
        <NavBar />
        <div
          style={{
            backgroundColor: "#f7f7f7",
            display: "grid",
            gridTemplateColumns: "73% 27%",
          }}
        >
          <div
            className="videos"
            style={{ marginLeft: "7rem", marginTop: "1.8rem" }}
          >
            <YouTube videoId={playVideoData.id} opts={opts} />
            <div className="player-video-title">{playVideoData.title}</div>
            <div className="player-video-details">
              <span>
                {playVideoData.views ? playVideoData.views : "108K"} views
              </span>
              &nbsp;•&nbsp;
              <span>
                {playVideoData.uploadTime !== ""
                  ? playVideoData.uploadTime
                  : "Few seconds ago"}
              </span>
            </div>
            <hr />
          </div>
          <div>
            <div>
              <Categories playerCategory="player-category" />
            </div>
              <div className="videos">
                <section className="video-section">
                  <VideoList />
                </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.addVideoReducer,
  };
};

export default connect(mapStateToProps, null)(VideoPlayer);
