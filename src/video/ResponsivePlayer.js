import React from "react";
import ReactPlayer from "react-player";
import "./ResponsivePlayer.css";
const ResponsivePlayer = ({ url, onProgress }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="50%"
        height="50%"
        controls
        playing
        onProgress={onProgress}
      />
    </div>
  );
};
export default ResponsivePlayer;
