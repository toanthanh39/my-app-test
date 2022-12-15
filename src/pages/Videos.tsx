import { Col, Layout, Row, Space } from "antd";
import React from "react";
import PaginationCustom from "./../components/pagination/PaginationCustom";

const Videos = () => {
  return (
    <Layout style={{ position: "relative" }}>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="w-full h-full rounded-lg">
            <video
              className="object-cover rounded-xl  "
              controls
              width={500}
              height={300}
            >
              {/* <source src="video.webm" type="video/webm" /> */}
              {/* <source src="video.ogg" type="video/ogg" /> */}
              <source src="/asset/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="w-full h-full">
            <video
              className="object-cover rounded-xl   "
              controls
              width={500}
              height={300}
            >
              {/* <source src="video.webm" type="video/webm" /> */}
              {/* <source src="video.ogg" type="video/ogg" /> */}
              <source src="/asset/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="w-full h-full">
            <video
              className="object-cover rounded-xl   "
              controls
              width={500}
              height={300}
            >
              {/* <source src="video.webm" type="video/webm" /> */}
              {/* <source src="video.ogg" type="video/ogg" /> */}
              <source src="/asset/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="w-full h-full ">
            <video
              className="object-cover rounded-xl  "
              controls
              width={500}
              height={300}
            >
              {/* <source src="video.webm" type="video/webm" /> */}
              {/* <source src="video.ogg" type="video/ogg" /> */}
              <source src="/asset/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="w-full h-full">
            <video
              className="object-cover rounded-xl   "
              controls
              width={500}
              height={300}
            >
              {/* <source src="video.webm" type="video/webm" /> */}
              {/* <source src="video.ogg" type="video/ogg" /> */}
              <source src="/asset/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>{" "}
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="w-full h-full">
            <video
              className="object-cover  rounded-xl "
              controls
              width={500}
              height={300}
            >
              {/* <source src="video.webm" type="video/webm" /> */}
              {/* <source src="video.ogg" type="video/ogg" /> */}
              <source src="/asset/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>{" "}
        <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <div className="w-full h-full">
            <video
              className="object-cover rounded-xl   "
              controls
              width={500}
              height={300}
            >
              {/* <source src="video.webm" type="video/webm" /> */}
              {/* <source src="video.ogg" type="video/ogg" /> */}
              <source src="/asset/videos/video.mp4" type="video/mp4" />
            </video>
          </div>
        </Col>
      </Row>
      <PaginationCustom></PaginationCustom>
    </Layout>
  );
};

export default Videos;
