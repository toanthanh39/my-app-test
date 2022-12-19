import React from "react";
import { Data } from "../../types/Types";

const VideoDaily = ({
  dataSingle,
  videoRef,
}: {
  dataSingle: Data;
  videoRef?: React.LegacyRef<HTMLVideoElement> | undefined;
}) => {
  return (
    <React.Fragment>
      <video
        ref={videoRef}
        className="object-cover rounded-xl  "
        controls
        width="100%"
        height="100%"
        loop={true}
        autoPlay
      >
        <source src={dataSingle.video} type="video/mp4" />
      </video>
    </React.Fragment>
  );
};

export default VideoDaily;
