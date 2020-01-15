import setDisplay from "./setDisplay";

interface Services {
  name: string;
  callback: () => any;
}

const denyAllCookies = ($services: Array<Services>) => {
  setDisplay("banner-cookie", "none");
  setAllLocalStoragesServicesFalse($services);
};

const setAllLocalStoragesServicesFalse = $services => {
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
