import React from "react";
import ReactPlayer from "react-player";

const PlayerCustom = () => {
  const video = React.useRef(null);
  console.log("🚀 ~ file: PlayerCustom.jsx:6 ~ PlayerCustom ~ video", video);
  React.useEffect(() => {
    const Video = document.getElementsByTagName("video");
    console.log(
      "🚀 ~ file: PlayerCustom.jsx:9 ~ React.useEffect ~ Video",
      Video
    );
  }, []);
  return (
    <div className="player-wrapper w-full h-full">
      <ReactPlayer
        className="react-player object-cover"
        url="/asset/videos/video2.mp4"
        width="100%"
        height="100%"
        playing={true}
        autoPlay
        controls
        ref={video}
      />
    </div>
  );
};

export default PlayerCustom;
