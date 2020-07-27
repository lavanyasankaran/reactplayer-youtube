import React from "react";
import ResponsivePlayer from "../video/ResponsivePlayer";
import "./Lesson.css";
const Lesson = (props) => {
  

  const handleWatchComplete = ({ played }) => {
    console.log(played);
    if (played === 1 && !props.watchComplete) {
      console.log("finished");
      props.setWatchComplete(true);
    }
  };
  return (
    <div>
      <ResponsivePlayer
        url={props.url}
        onProgress={handleWatchComplete}
      />

      
    </div>
  );
};

export default Lesson;
