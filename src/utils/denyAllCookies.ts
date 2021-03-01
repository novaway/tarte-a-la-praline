import setDisplay from "./setDisplay";
import { Service } from "../types";

const denyAllCookies = ($services: Service[]) => {
  setDisplay("js-cookie-banner", "none");
  setAllLocalStoragesServicesFalse($services);
};

const setAllLocalStoragesServicesFalse = ($services: Service[]) => {
  let $statusServices = {};
  $services.forEach(({ id }) => {
    $statusServices = {
      ...$statusServices,
      [id]: false
    };
  });
  localStorage.setItem("services", JSON.stringify($statusServices));
};

export default denyAllCookies;
