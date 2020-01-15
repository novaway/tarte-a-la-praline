import setDisplay from "./setDisplay";

const denyAllCookies = $services => {
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
