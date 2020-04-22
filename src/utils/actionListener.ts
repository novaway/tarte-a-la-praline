import setDisplay from "./setDisplay";
import allowAllCookies from "./allowAllCookies";
import denyAllCookies from "./denyAllCookies";
import openSelection from "./openSelection";
import allowCustomCookies from "./allowCustomCookies";
import { Service, StorageServices } from "../types";
import { getStorageServices, setStorageServices } from "./storage";

const actionListener = (services: Service[]): void => {
  const actions = [
    {
      className: ".js-cookie-button-allow",
      action: () => allowAllCookies(services),
    },
    {
      className: ".js-cookie-button-deny",
      action: () => denyAllCookies(services),
    },
    {
      className: ".js-cookie-button-customize",
      action: () => openSelection(services),
    },
  ];

  actions.forEach(({ className, action }): void => {
    const $currentAction = document.querySelector(className);

    if ($currentAction) {
      $currentAction.addEventListener("click", action);
    }
  });
};

const customActionListener = (services: Service[]): void => {
  const $form = document.getElementById("js-custom-cookie-form");

  if ($form) {
    $form.addEventListener("submit", (event: Event): void => {
      event.preventDefault();

      const checkedServices: string[] = [
        ...document.querySelectorAll("input[type=checkbox]:checked"),
      ].map(({ name }: HTMLInputElement) => name);

      const execServices = services.filter((s: Service) =>
        checkedServices.includes(s.name)
      );

      const storageServices = services.map((s: Service) => ({
        ...s,
        value: checkedServices.includes(s.name),
      }));

      setStorageServices(storageServices);
      allowCustomCookies(execServices);
    });
  }
};
export { customActionListener, actionListener };
