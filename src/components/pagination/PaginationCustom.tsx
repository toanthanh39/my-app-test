import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import React from "react";
type Props = {
  onShowSizeChange?: PaginationProps["onShowSizeChange"];
  total?: number;
  defaultCurrent?: number;
  className?: string;
};
const PaginationCustom = ({
  onShowSizeChange,
  total = 100,
  defaultCurrent = 3,
  className = "",
}: Props) => {
  return (
    <div className={`relative ml-5 mt-10 mb-10 ${className}`}>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={defaultCurrent}
        total={total}
      />
    </div>
  );
};

export default PaginationCustom;
