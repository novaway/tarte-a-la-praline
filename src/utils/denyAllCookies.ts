import setDisplay from "./setDisplay";
import { Services } from "../type";

const denyAllCookies = ($services: Array<Services>) => {
  setDisplay("banner-cookie", "none");
  setAllLocalStoragesServicesFalse($services);
};

const setAllLocalStoragesServicesFalse = ($services: Array<Services>) => {
  let $statusServices = {};
  $services.forEach(({ name }) => {
    $statusServices = {
      ...$statusServices,
      [name]: false
    };
  });
  localStorage.setItem("services", JSON.stringify($statusServices));
};

export default denyAllCookies;
