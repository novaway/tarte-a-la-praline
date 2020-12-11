import { StorageServices, Service } from "../types";

export const getStorageServices = (): StorageServices | null => {
  const services = localStorage.getItem("services");

  if (services) {
    return JSON.parse(services);
  }

  return null;
};

export const setStorageServices = (services: Service[]): void => {
  let $statusServices = {};
  console.log(services, "storage.ts");
  services.forEach(({ name, value }) => {
    $statusServices = {
      ...$statusServices,
      [name]: value
    };
  });
  localStorage.setItem("services", JSON.stringify($statusServices));
};
