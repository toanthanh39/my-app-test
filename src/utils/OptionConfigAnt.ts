type Option = {
  token?: object;
  layout?: object;
  Button?: object;
  Switch?: object;
  Radio?: object;
  Checkbox?: object;
  Menu?: object;
};

const primaryDark = "#333333";
const primaryLight = "#ffffff";
const secondaryDark = "#aaa";
export const lightMode: Option = {
  token: {
    // colorPrimary: primaryDark,
    // colorPrimary: "red",

    colorBgBase: primaryLight,
    colorBgLayout: primaryLight,
    colorBgContainer: primaryLight,
    colorText: primaryDark,
    colorBgElevated: primaryLight,
    colorLink: primaryDark,
    colorTextPlaceholder: primaryDark,
    colorTextQuaternary: secondaryDark,
    colorIcon: primaryLight,
    colorFillContent: "red",
    boxShadow:
      "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
    // colorLinkHover: "yellow",
  },
  layout: {
    colorBgLayout: primaryLight,
    colorBgHeader: primaryLight,
    colorLink: primaryDark,
  },

  Checkbox: {
    colorPrimaryHover: "none",
  },
  Menu: {
    colorPrimary: "white",
    colorText: "white",
    // colorIcon: "blue",
    // colorBgBase: primaryDark,
    // colorBgLayout: primaryDark,
    // colorBgContainer: primaryDark,
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
    colorBorder: primaryLight,
    boxShadow:
      "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
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
    colorBorder: primaryLight,
  },
  Menu: {
    // colorPrimary: "",
    colorPrimary: "green",
    colorIcon: "blue",
    colorBgBase: primaryDark,
    colorBgLayout: primaryDark,
    colorBgContainer: primaryDark,
  },
};
