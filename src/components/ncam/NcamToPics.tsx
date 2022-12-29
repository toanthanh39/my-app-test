import React from "react";
import Ncam from "./Ncam";

const NcamToPics = () => {
  const [arr, setArr] = React.useState<any[]>([]);
  const getTopic = (topic: any) => {
    setArr(topic);
  };
  return (
    <div>
      <Ncam total={10} timeCurrent={500} getListTopic={getTopic}></Ncam>
    </div>
  );
};

export default NcamToPics;
