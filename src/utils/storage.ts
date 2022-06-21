import { StorageServices, Service } from "../types";

export const getStorageServices = (): StorageServices | null => {
  const services = localStorage.getItem("services");

  if (services) {
    return JSON.parse(services);
  }

  return null;
};

export const setStorageServices = (services: Service[]): void => {
  const createdAt = new Date();
  createdAt.setSeconds(0, 0);

  let $statusServices = { createdAt };

  services.forEach(({ id, value, executeIfDeny }) => {
    $statusServices = {
      ...$statusServices,
      [id]: value
    };
    if( value == false && executeIfDeny){
      executeIfDeny();
    }
  });

  localStorage.setItem("services", JSON.stringify($statusServices));
  localStorage.setItem("oldServices", JSON.stringify($statusServices));
};

export const clearServicesFromStorage = () =>
  localStorage.removeItem("services");

export const setCreatedAtKey = (services: StorageServices) =>
  localStorage.setItem("services", JSON.stringify(services));
