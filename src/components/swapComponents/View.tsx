import React from "react";
type Props = {
  children: any;
};
const View = ({ children, ...props }: Props) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default View;
