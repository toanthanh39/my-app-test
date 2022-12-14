import React from "react";
import { Skeleton } from "antd";
const SkeletonCustom: React.FC = () => {
  return (
    <React.Fragment>
      <Skeleton active={true} loading={true}></Skeleton>
    </React.Fragment>
  );
};

export default SkeletonCustom;
