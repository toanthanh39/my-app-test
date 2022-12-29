type Option = {
  token?: object;
  layout?: object;
  Button?: object;
  Switch?: object;
  Radio?: object;
  Checkbox?: object;
  Menu?: object;
  Modal?: object;
  Card?: object;
};

const primaryDark = "#333333";
const primaryLight = "#ffffff";
const secondaryLight = "rgba(229, 229, 229, 0.2)";
const secondaryDark = "#aaa";
const fontFamilyPrimary = "Montserrat";
export const lightMode: Option = {
  // token: {
  // colorPrimary: primaryDark,
  //   // colorPrimary: "red",

  //   colorBgBase: primaryLight,
  //   colorBgLayout: secondaryLight,
  //   colorBgContainer: primaryLight,
  //   colorText: primaryDark,
  //   colorBgElevated: primaryLight,
  //   colorLink: primaryDark,
  //   colorTextPlaceholder: primaryDark,
  //   colorTextQuaternary: secondaryDark,
  //   colorIcon: "black",
  //   colorFillContent: "blue",

  //   // colorLinkHover: "yellow",
  // },
  // layout: {
  //   colorBgLayout: primaryLight,
  //   colorBgHeader: primaryLight,
  //   colorLink: primaryDark,
  // },

  // Checkbox: {
  //   colorPrimaryHover: "none",
  // },
  // Menu: {
  //   colorPrimary: "white",
  //   colorText: "white",
  //   // colorIcon: "blue",
  //   // colorBgBase: primaryDark,
  //   // colorBgLayout: primaryDark,
  //   // colorBgContainer: primaryDark,
  // },
  token: {
    colorPrimary: secondaryDark,
    colorText: primaryDark,
    colorBorder: primaryDark,
    fontFamily: fontFamilyPrimary,
  },
  Menu: {
    colorPrimary: "white",
    colorText: "white",
  },
  Button: {
    colorPrimary: "red",
    colorPrimaryHover: "none",
    colorPrimaryTextHover: "red",
  },
};
export const darkMode: Option = {
  // token: {
  //   // colorPrimary: primaryLight,
  //   colorBgBase: primaryDark,
  //   colorBgLayout: primaryDark,
  //   colorBgContainer: primaryDark,
  //   colorText: primaryLight,
  //   colorLink: primaryLight,
  //   colorTextQuaternary: secondaryDark,
  //   colorIcon: primaryLight,
  //   colorBorder: primaryLight,
  //   // boxShadow:
  //   //   "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
  //   colorPrimaryHover: "red",
  // },
  // layout: {
  //   colorBgLayout: primaryDark,
  //   colorBgHeader: primaryDark,
  //   colorPrimary: primaryLight,
  // },
  // Radio: {
  //   colorPrimaryHover: "none",
  // },
  // Checkbox: {
  //   colorPrimary: "red",
  //   colorPrimaryHover: "none",
  // },
  // Button: {
  //   colorPrimary: secondaryDark,
  //   colorPrimaryHover: "none",
  //   colorPrimaryTextHover: "red",

  //   // colorBorder: primaryLight,
  //   // colorText: "blue",
  //   colorTextSecondary: "#ffff40",
  // },
  // Menu: {
  //   // colorPrimary: "",
  //   colorPrimary: "#595959",
  //   colorIcon: "blue",
  //   colorBgBase: primaryDark,
  //   colorBgLayout: primaryDark,
  //   colorBgContainer: primaryDark,
  // },
  // Modal: {
  //   colorText: primaryDark,
  // },
  token: {
    colorBgLayout: primaryDark,
    colorPrimary: primaryLight,
    colorTextHeading: primaryLight,
    colorText: primaryLight,
    colorBgContainer: primaryDark,
    colorTextQuaternary: secondaryDark,
    colorBgElevated: primaryDark,
    fontFamily: fontFamilyPrimary,
  },
  Menu: {
    colorPrimary: "rgba(255,255,255,.1)",
  },
  Card: {},
  Button: {
    colorPrimary: "red",
    colorPrimaryHover: "none",
    colorPrimaryTextHover: "red",
    colorPrimaryText: "red",
  },
  Modal: {
    colorIcon: "red",
    colorPrimay: "res",
  },
};
