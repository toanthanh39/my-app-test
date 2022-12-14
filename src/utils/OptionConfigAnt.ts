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
    colorIcon: primaryDark,
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
    colorTextQuaternary: secondaryDark,
    colorIcon: primaryLight,
    colorLinkHover: "yellow",
    colorBorder: "white",

    // colorPrimaryHover: primaryLight,
    // colorBorder: primaryLight,
    // colorBgElevated: primaryDark,
    // colorTextPlaceholder: primaryLight,
  },
  layout: {
    colorBgLayout: primaryDark,
    colorBgHeader: primaryDark,
    colorPrimary: primaryLight,
  },
  Radio: {
    colorPrimary: "red",
    colorPrimaryHover: "none",
  },
  Checkbox: {
    colorPrimary: "red",
    colorPrimaryHover: "none",
  },
  Button: {
    colorPrimary: "red",
    colorPrimaryHover: "none",
    colorBorder: "white",
  },
};
