import setDisplay from "./setDisplay";
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

  actions.forEach(({ className, action }) => {
    const $currentAction = document.querySelector(className);
    if ($currentAction) {
      $currentAction.addEventListener("click", action);
    }
  });
};

const customActionListener = () => {
  const forms = document.querySelector(".custom-cookie-form");
  if (forms !== null) {
    console.log("444");
    forms.addEventListener("submit", function(e) {
      e.preventDefault();
      console.log(e);
    });
  }
};
export { customActionListener, actionListener };
// export default actionListener;
