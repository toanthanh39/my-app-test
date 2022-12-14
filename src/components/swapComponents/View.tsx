import React from "react";
type Props = {
  children: any;
  className?: string;
};
const View = ({ children, className, ...props }: Props) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default View;
