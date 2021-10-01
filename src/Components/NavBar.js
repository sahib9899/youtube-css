import React, { useState } from "react";
import logo from "./Icons/logo.svg";
import searchIcon from "./Icons/search-icon.svg";
import createVideo from "./Icons/createVideo.svg";
import apps from "./Icons/apps.svg";
import bell from "./Icons/bell.svg";
import user from "./Icons/user.svg";
import gridLogo from "./Icons/gridLogo.svg"
import listLogo from "./Icons/listLogo.svg"
import MenuLogo from "./Icons/MenuLogo.svg";
import { addVideo, themeChange, menuChange, viewChange } from "./Actions";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {
  Button,
  Modal,
  FormControl,
  FormLabel,
  OverlayTrigger,
  Tooltip,
  Dropdown,
} from "react-bootstrap";
import ImageUploading from "react-images-uploading";
import { connect } from "react-redux";
import moment from "moment";
import HomePage from "./HomePage";

const NavBar = (props) => {
  
  const [show, setshow] = useState(false);
  const [checked, setChecked] = useState(true)
  const [view, setView] = useState(true)
  const [open, setOpen] = useState(true)
  const [videoData, setVideoData] = useState({
    id: "",
    title: "",
    uploadTime: "",
    thumbnail: "",
  });

  const onChange = image => setVideoData({ ...videoData, thumbnail: image[0].url });
  const handleFeatures = (check) => {
    if(check == 'theme'){
      setChecked(!checked)
      props.themeChange(checked)
    }else if(check == 'view'){
      setView(!view)
      props.viewChange(view)
    }else{
      setOpen(!open)
      props.menuChange(open)
    }
  }

  const handleInput = () => {
    setshow(false);
    setVideoData({
      ...videoData,
      uploadTime: moment().format("YYYY-MM-DD HH:mm"),
    });
    props.addVideo(videoData);
  };

  return (
    <div className="header">
      <img style={{ cursor: "pointer"}} src={MenuLogo} onClick={()=>handleFeatures('menu')}/>
      <a href="#">
        <img src={logo} alt="YouTube logo" className="youtube-logo" />
      </a>
      <div className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button type="submit" className="search-btn">
          <img src={searchIcon} />
        </button>
      </div>
      <div className="menu-icons">
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="button-tooltip-2" style={{ color: "#e7e7e7" }}>
              Add new video
            </Tooltip>
          }
        >
          <img
            src={createVideo}
            alt="upload video"
            onClick={() => setshow(true)}
          />
        </OverlayTrigger>
  
        <img src={apps} alt="apps" />
        <img src={bell} alt="Notifications" />

        <Dropdown>
          <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
            <img src={user} alt="login user" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#" >Login user</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#" >Dark Theme  
            <BootstrapSwitchButton size="xs"  checked={false} onChange={()=>handleFeatures('theme')} /> 
            </Dropdown.Item>
            <Dropdown.Item href="#" >Layout view  
            <BootstrapSwitchButton size="xs"  checked={false} onChange={()=>handleFeatures('view')} /> 
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

const mapDispatchToProps = { addVideo, themeChange, menuChange, viewChange };

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
