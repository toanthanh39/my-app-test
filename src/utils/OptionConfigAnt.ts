type Option = {
  token?: object;
  layout?: object;
  Button?: object;
  Switch?: object;
  Radio?: object;
  Checkbox?: object;
};

const primaryDark = "#333333";
const primaryLight = "#ffffff";
const secondaryDark = "#aaa";
export const lightMode: Option = {
  token: {
    colorPrimary: primaryDark,
    colorBgBase: primaryLight,
    colorBgLayout: primaryLight,
    colorBgContainer: primaryLight,
    colorText: primaryDark,
    colorBgElevated: primaryLight,
    colorLink: primaryDark,
    colorTextPlaceholder: primaryDark,
    colorTextQuaternary: secondaryDark,
    colorLinkHover: "yellow",
  },
  layout: {
    colorBgLayout: primaryLight,
    colorBgHeader: primaryLight,
    colorLink: primaryDark,
  },
  Radio: {
    colorFill: primaryDark,
  },
  Checkbox: {
    colorFill: primaryDark,
  },
};
export const darkMode: Option = {
  token: {
    colorPrimary: primaryLight,
    colorBgBase: primaryDark,
    colorBgLayout: primaryDark,
    colorBgContainer: primaryDark,
    colorText: primaryLight,
    colorLink: primaryLight,
    // colorBgElevated: primaryDark,
    // colorTextPlaceholder: primaryLight,
    colorTextQuaternary: secondaryDark,
    // colorIcon: primaryLight,
    // colorPrimaryHover: primaryLight,
    // colorBorder: primaryLight,
    colorLinkHover: "yellow",
  },
  layout: {
    colorBgLayout: primaryDark,
    colorBgHeader: primaryDark,
    colorPrimary: primaryLight,
  },
  Radio: {
    colorPrimary: "red",
  },
  Checkbox: {
    // colorFill: "red",
    colorPrimary: "red",
  },
  Button: {
    colorPrimary: "red",
    colorPrimaryHover: "none",
    colorBorder: "white",
  },
};
