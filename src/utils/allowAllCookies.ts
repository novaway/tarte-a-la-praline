import setDisplay from "./setDisplay";

const servicesList = ["ga", "hotJar"];

const allowAllCookies = () => {
  setAllLocalStoragesServicesTrue(servicesList);
  document.location.reload();
  setDisplay("banner-cookie", "none");
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
