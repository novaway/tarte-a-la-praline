import setDisplay from "./setDisplay";
import { Services } from "../type";

const allowCustomCookies = ($services: Array<Services>) => {
  const $currentLocalStorage = JSON.parse(localStorage.getItem("services"));
  if ($services && $currentLocalStorage) {
    $services.forEach(({ name, callback }) => {
      if ($currentLocalStorage[name]) {
        callback();
      }
    });
  }
  setDisplay("js-custom-selection", "none");
  setDisplay("banner-cookie", "none");
};

export default allowCustomCookies;
