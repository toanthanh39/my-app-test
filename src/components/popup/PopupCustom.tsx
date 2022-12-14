import React from "react";
import { Modal } from "antd";
type Handle = {
  handleCancel?:
    | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  handleOk?:
    | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  isModalOpen?: boolean;
  title?: string;
  children?: any;
};
const PopupCustom = ({
  handleCancel,
  isModalOpen,
  handleOk,
  title = " default title",
  children,
  ...props
}: Handle) => {
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default PopupCustom;
