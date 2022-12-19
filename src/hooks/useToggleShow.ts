import * as React from "react";

export const useToggleShow = (initialValue?: boolean) => {
  const [isOpen, setIsOpen] = React.useState(initialValue || false) as any;

  const setHide = () => {
    setIsOpen(false);
  };
  const setShow = () => {
    setIsOpen(true);
  };
  const toggleShow = () => {
    setIsOpen((isOpen: any) => !isOpen);
  };
  return {
    isOpen,
    setHide,
    setShow,
    toggleShow,
  };
};
