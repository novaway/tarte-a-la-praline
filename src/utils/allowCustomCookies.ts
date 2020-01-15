import setDisplay from "./setDisplay";

interface Services {
  name: string;
  callback: () => any;
}

const allowCustomCookies = ($services: Array<Services>) => {
  const $currentLocalStorage = JSON.parse(localStorage.getItem("services"));
  console.log($services);
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
