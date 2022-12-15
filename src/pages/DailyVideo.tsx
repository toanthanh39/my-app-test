import { Layout } from "antd";
import React from "react";

const DailyVideo = () => {
  return (
    <Layout style={{ height: "calc( 90vh - 10px )" }}>
      <div className="w-full h-full rounded-lg">
        <video
          className="object-cover   rounded-xl  "
          controls
          width="100%"
          height="100%"
        >
          {/* <source src="video.webm" type="video/webm" /> */}
          {/* <source src="video.ogg" type="video/ogg" /> */}
          <source src="/asset/videos/video.mp4" type="video/mp4" />
        </video>
      </div>
    </Layout>
  );
};

export default DailyVideo;
