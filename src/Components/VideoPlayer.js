import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = (props) => {
//
    console.log('props', props.props);
    const videoId = props.props;

    const onReady = (e) => {
      // access to player in all event handlers via event.target
      //e.target.pauseVideo();
    }

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    }

    return <YouTube videoId={videoId} opts={opts} onReady={()=>onReady()} />;
  
}

export default VideoPlayer;