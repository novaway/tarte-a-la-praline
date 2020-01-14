import setDisplay from "../utils/setDisplay";

const servicesList = ["ga", "hotJar"];

const denyAllCookies = () => {
  setDisplay("banner-cookie", "none");
  setAllLocalStoragesServicesFalse(servicesList);
};

const setAllLocalStoragesServicesFalse = (servicesList: Array<string>) => {
  servicesList.forEach(
    service =>
      (localStorage.services = JSON.stringify({
        allowGa: false,
        allowHotjar: false
      }))
  );
};

export default denyAllCookies;
