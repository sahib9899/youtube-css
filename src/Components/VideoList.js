import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import stlogo from "./Images/stLogo.jpg";
import '../Styles.css'
import { viewChange } from "./Actions";

const VideoList = (props) => {
  const videoData = props.data;
  //  const viewData = props.viewData;
  // console.log('vd', viewData)
  const filter = () => {
    if (props.category == "All" || props.category == "") {
      return videoData;
    } else {
       return videoData.filter(data => props.category == data.category);
    }
  }
  var viewName = props.viewData;
  props.viewData ?  viewName = '-list' : viewName = '';
  // console.log('vD',viewName)

  function ShowList() {
    return filter().map((video) => {
      return (
        <Link to={{ pathname: "/videoPlayer", aboutProps: video }}>
          
          <section className={`video-section${viewName}`}>
          <artical className={`video-container${viewName}`}>
            <a href="#">
              <img className={`thumbnail-image${viewName}`} src={video.thumbnail} />
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
          </section>
        </Link>
      );
    });
  }

  return <React.Fragment> <div className={`videos${viewName}`}> {ShowList()} </div></React.Fragment>
};

const mapStateToProps = (state) => {
  return {
    data: state.addVideoReducer,
    viewData: state.viewChange
  };
};

export default connect(mapStateToProps, null)(VideoList);
