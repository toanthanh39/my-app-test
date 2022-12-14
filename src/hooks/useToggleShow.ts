import * as React from "react";

export const useToggleShow = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const setHide = () => {
    setIsOpen(false);
  };
  const setShow = () => {
    setIsOpen(true);
  };
  const toggleShow = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return {
    isOpen,
    setHide,
    setShow,
    toggleShow,
  };
};
