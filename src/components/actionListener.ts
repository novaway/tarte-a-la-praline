import setDisplay from "../utils/setDisplay";
import allowAllCookies from "./allowAllCookies";
import denyAllCookies from "./denyAllCookies";
import openSelection from "./openSelection";

const actionListener = () => {
  const actions = [
    {
      className: ".js-cookie-button-allow",
      action: allowAllCookies
    },
    {
      className: ".js-cookie-button-deny",
      action: denyAllCookies
    },
    {
      className: ".js-cookie-button-customize",
      action: openSelection
    }
  ];

  actions.forEach(({ className, action }) =>
    document.querySelector(className).addEventListener("click", action)
  );
};

export default actionListener;
