import setDisplay from "../utils/setDisplay";

const servicesList = ["ga", "hotJar"];

const allowAllCookies = () => {
  setDisplay("banner-cookie", "none");
  setAllLocalStoragesServicesTrue(servicesList);
};

const setAllLocalStoragesServicesTrue = (servicesList: Array<string>) => {
  servicesList.forEach(
    service =>
      (localStorage.services = JSON.stringify({
        allowGa: true,
        allowHotjar: true
      }))
  );
};

export default allowAllCookies;
