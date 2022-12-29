import React from "react";
import Webcam from "react-webcam";
import { Row } from "antd";
import { useToggleShow } from "./../../hooks/useToggleShow";
import { useGlobalContext } from "../../contexts/GlobalContext";
type Props = {
  total?: number;
  timeCurrent?: number;
  getListTopic: (topic: any) => void;
};
const Ncam = ({ total = 5, timeCurrent = 1000, getListTopic }: Props) => {
  const webcamRef = React.useRef<null | any>(null);
  const [imgSrc, setImgSrc] = React.useState<any>([]);
  const { isOpen, toggleShow } = useToggleShow(true);
  const { base64, setBase64 } = useGlobalContext();
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const arrUpdate = [];

  const capture = React.useCallback(() => {
    let i = 1;
    const add = setInterval(() => {
      i++;
      const imageSrc = webcamRef.current.getScreenshot();
      arrUpdate.push(imageSrc);
      setImgSrc((prev: any) => [...prev].concat(imageSrc));
      setBase64((prev: any) => [...prev].concat(imageSrc));
      if (i > total) {
        clearInterval(add);
      }
    }, timeCurrent);
  }, [webcamRef, imgSrc]);
  React.useEffect(() => {
    getListTopic(imgSrc);
  }, [imgSrc]);
  const stop = () => {
    webcamRef.current?.video.srcObject.getTracks()[0].stop();
    setTimeout(() => {
      toggleShow();
    }, 1000);
    // webcamRef.current?.stopAndCleanup();
  };
  const off = async () => {};
  React.useEffect(() => {}, [webcamRef]);
  return (
    <React.Fragment>
      {isOpen && (
        <Webcam
          audio={false}
          height={350}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
      )}
      <button onClick={capture}>Capture photo</button>
      <Row style={{ gap: "16px" }}>
        {base64 &&
          base64.map((item: any, index: any) => (
            <img key={index} src={item} alt="" />
          ))}
      </Row>
      <Row>
        <button onClick={() => stop()}>toggle</button>
      </Row>
    </React.Fragment>
  );
};

export default Ncam;
