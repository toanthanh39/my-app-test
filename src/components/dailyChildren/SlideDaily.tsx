import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCustom from "./../swiper/SwiperCustom";
import { Data } from "../../types/Types";
import { useToggleShow } from "./../../hooks/useToggleShow";
import { message } from "antd";
import { Alert } from "antd";
import { Typography } from "antd";
const { Text } = Typography;
const SlideDaily = ({ dataSingle }: { dataSingle: Data }) => {
  const { isOpen, toggleShow } = useToggleShow(true);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "info",
      content: " Pres ESC to exit full screen",

      duration: 1.5,
    });
  };
  React.useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        toggleShow();
      }
    });
    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          toggleShow();
        }
      });
    };
  }, []);
  React.useEffect(() => {
    if (isOpen) {
      success();
    }
  }, [isOpen]);
  return (
    <React.Fragment>
      {/* {isOpen && (
        <Alert
          style={{
            position: "fixed",
            top: "16px",
            left: "50%",
            zIndex: "10000000000000000000000000000",
            transform: "translateX(-50%)",
            background: "#333333",
          }}
          message={
            <Text
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              Press
              <strong style={{ border: "1px solid white", padding: "2px 3px" }}>
                Esc
              </strong>
              to exit
            </Text>
          }
          type="info"
          showIcon
        />
      )} */}
      {contextHolder}
      <SwiperCustom
        perView={1}
        space={0}
        isNavigation={false}
        isScrollBar={false}
        responsive={{
          xs: 1,
          md: 2,
          lg: 1,
          xl: 1,
        }}
        className={`${isOpen ? "fixed inset-0" : ""}`}
      >
        {dataSingle.images?.map((item: any, index: any) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full ">
              <img
                className="w-full h-full object-cover object-center   "
                src="/asset/images/slideshow_2.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperCustom>
    </React.Fragment>
  );
};

export default SlideDaily;
