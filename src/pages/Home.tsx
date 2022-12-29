import React, { useEffect } from "react";
import { useToggleShow } from "../hooks/useToggleShow";
import SwiperCustom from "./../components/swiper/SwiperCustom";
import { useToggleType } from "./../types/Types";
import PopupCustom from "./../components/popup/PopupCustom";
import { Button, Checkbox, Radio } from "antd";
import DatePicker from "../components/timePicker/DatePickerCustom";
import DatePickerCustom from "./../components/timePicker/DatePickerCustom";
import { useGlobalContext } from "../contexts/GlobalContext";
import { Switch } from "antd";
import SwitchCustom from "../components/switch/SwitchCustom";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Checkouts from "./../components/checkout/Checkouts";
import CheckoutGuest from "./../components/checkout/CheckoutGuest";
import RadioCustom from "./../components/checkout/RadioCustom";

const Home = () => {
  const arr = Array.from(new Array(10));
  const { isOpen, setHide, setShow, toggleShow }: useToggleType =
    useToggleShow(false);
  const { dark, toggleDark } = useGlobalContext();
  return (
    <React.Fragment>
      <PopupCustom
        handleCancel={setHide}
        isModalOpen={isOpen}
        handleOk={setHide}
      ></PopupCustom>

      {/* <div>
        <SwiperCustom
          perView={1}
          space={0}
          isNavigation={false}
          isScrollBar={false}
          responsive={{
            xs: 1,
            md: 2,
            lg: 3,
            xl: 1,
          }}
          className="h-full"
        >
          {arr.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/asset/images/slideshow_2.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </SwiperCustom>
      </div>
      <div className="mb-10 mt-10  relative mx-auto w-full text-center flex gap-8 justify-center  ">
        <Button onClick={toggleShow} type="primary">
          Show Modal
        </Button>
        <DatePickerCustom
          type="date"
          onChange={(value) => console.log(value?.format("DD/MM/YYYY"))}
        ></DatePickerCustom>
        <SwitchCustom handleChange={toggleDark} isChecked={dark}></SwitchCustom>
        <Checkbox>CheckBox</Checkbox>
        <Radio>Radio</Radio>
      </div> */}

      {/* <div className="">
        <Checkouts></Checkouts>
      </div> */}
      {/* <div className="mt-10">
        <CheckoutGuest></CheckoutGuest>
      </div> */}
      {/* <div className="mt-10">
        <RadioCustom></RadioCustom>
      </div> */}
      <div className="">
        <Link to="/nBoards">BLogs</Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
