import React, { useState } from "react";
import logo from "./Icons/logo.svg";
import searchIcon from "./Icons/search-icon.svg";
import createVideo from "./Icons/createVideo.svg";
import apps from "./Icons/apps.svg";
import bell from "./Icons/bell.svg";
import user from "./Icons/user.svg";
import MenuLogo from "./Icons/MenuLogo.svg";
import { addVideo } from "./Actions";
import {
  Button,
  Modal,
  FormControl,
  FormLabel,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import ImageUploading from "react-images-uploading";
import { connect } from "react-redux";
import moment from "moment";

const NavBar = (props) => {
  const [show, setshow] = useState(false);
  const [videoData, setVideoData] = useState({
    id: "",
    title: "",
    uploadTime: "",
    thumbnail: "",
  });

  const onChange = (image) => setVideoData({ ...videoData, thumbnail: image[0].url });

  const handleInput = () => {
    setshow(false);
    setVideoData({...videoData, uploadTime: moment().format("YYYY-MM-DD HH:mm")});
    props.addVideo(videoData);
  };

  return (
    <div className="header">
      <img src={MenuLogo} />
      <a href="#">
        <img src={logo} alt="YouTube logo" className="youtube-logo" />
      </a>
      <form className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button type="submit" className="search-btn">
          <img src={searchIcon} />
        </button>
      </form>
      <div className="menu-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip id="button-tooltip-2" style={{color:"#e7e7e7"}}>Add new video</Tooltip> }
        >
          <img
            src={createVideo}
            alt="upload video"
            onClick={() => setshow(true)}
          />
        </OverlayTrigger>
        <img src={apps} alt="apps" />
        <img src={bell} alt="Notifications" />
        <img src={user} alt="login user" />
      </div>

      <div>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Add New Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormLabel>Title </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => {
                setVideoData({ ...videoData, title: e.target.value });
              }}
            />

            <FormLabel>ID </FormLabel>
            <FormControl
              type="text"
              onChange={(e) => {
                setVideoData({ ...videoData, id: e.target.value });
              }}
            />
            <br />
            <ImageUploading single onChange={onChange} dataURLKey="url">
              {({ onImageUpload }) => (
                <Button variant="outline-primary" onClick={onImageUpload}>
                  Choose thumbnail
                </Button>
              )}
            </ImageUploading>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setshow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleInput()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.addVideoReducer,
  };
};

const mapDispatchToProps = { addVideo };

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
