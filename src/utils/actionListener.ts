import setDisplay from "./setDisplay";
import allowAllCookies from "./allowAllCookies";
import denyAllCookies from "./denyAllCookies";
import openSelection from "./openSelection";
import allowCustomCookies from "./allowCustomCookies";
import { Services } from "../type";

const actionListener = ($services: Array<Services>) => {
  const actions = [
    {
      className: ".js-cookie-button-allow",
      action: () => allowAllCookies($services)
    },
    {
      className: ".js-cookie-button-deny",
      action: () => denyAllCookies($services)
    },
    {
      className: ".js-cookie-button-customize",
      action: () => openSelection($services)
    }
  ];

  actions.forEach(({ className, action }) => {
    const $currentAction = document.querySelector(className);
    if ($currentAction) {
      $currentAction.addEventListener("click", action);
    }
  });
};

const customActionListener = ($services: Array<Services>) => {
  const $forms = document.querySelector(".custom-cookie-form");
  if ($forms) {
    $forms.addEventListener("submit", function(e) {
      const $formsResult = document.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      let $currentLocalStorage = JSON.parse(localStorage.getItem("services"));
      $formsResult.forEach(({ name, value }) => {
        $currentLocalStorage = {
          ...$currentLocalStorage,
          [name]: JSON.parse(value)
        };
      });
      e.preventDefault();
      localStorage.services = JSON.stringify($currentLocalStorage);
      allowCustomCookies($services);
    });
  }
};
export { customActionListener, actionListener };
