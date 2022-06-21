import setDisplay from "./setDisplay";
import { Service } from "../types";

const denyAllCookies = ($services: Service[]) => {
  setDisplay("js-cookie-banner", "none");
  setAllLocalStoragesServicesFalse($services);
  $services.forEach(({ executeIfDeny }) => executeIfDeny && executeIfDeny());
};

const setAllLocalStoragesServicesFalse = ($services: Service[]) => {
  const createdAt = new Date();
  createdAt.setSeconds(0, 0);

  let $statusServices = { createdAt };

  $services.forEach(({ id }) => {
    $statusServices = {
      ...$statusServices,
      [id]: false
    };
  });
  localStorage.setItem("services", JSON.stringify($statusServices));
  localStorage.setItem("oldServices", JSON.stringify($statusServices));
};

export default denyAllCookies;
