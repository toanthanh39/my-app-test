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

const Home = () => {
  const arr = Array.from(new Array(10));
  const { isOpen, setHide, setShow, toggleShow }: useToggleType =
    useToggleShow();
  const { dark, toggleDark } = useGlobalContext();
  return (
    <React.Fragment>
      <PopupCustom
        handleCancel={setHide}
        isModalOpen={isOpen}
        handleOk={setHide}
      >
        <h1> le thanh toan</h1>
      </PopupCustom>

      <div>
        <SwiperCustom
          data={arr}
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
        ></SwiperCustom>
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
        <Link to="/blogs">BLogs</Link>
      </div>

      <div className=""></div>
    </React.Fragment>
  );
};

export default Home;
