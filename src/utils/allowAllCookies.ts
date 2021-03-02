import setDisplay from "./setDisplay";
import initGa from "../services/ga";
import initHotjar from "../services/hotjar";
import { Service } from "../types";

const allowAllCookies = ($services: Service[]) => {
  setAllLocalStoragesServicesTrue($services);
  $services.forEach(({ callback }) => callback());
  setDisplay("js-cookie-banner", "none");
};

const setAllLocalStoragesServicesTrue = ($services: Service[]) => {
  const createdAt = new Date();
  createdAt.setSeconds(0, 0);

  let $statusServices = { createdAt };

  $services.forEach(({ id }) => {
    $statusServices = {
      ...$statusServices,
      [id]: true
    };
  });
  localStorage.setItem("services", JSON.stringify($statusServices));
};

export default allowAllCookies;
