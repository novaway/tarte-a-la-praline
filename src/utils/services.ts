import initGa from "../services/ga";
import initGtm from "../services/gtm";
import initHotjar from "../services/hotjar";
import { Service, DefaultServices } from "../types";
import camelCase from "./camelCase";

const setService = (
  label: string,
  callback: () => void,
  description?: string
): Service => ({
  id: camelCase(label),
  label,
  callback,
  description
});

export interface SetServicesProps {
  defaultServices: DefaultServices;
  customServices?: Service[];
}

export const setServices = ({
  defaultServices,
  customServices
}: SetServicesProps): Service[] => {
  let services = [];

  if (defaultServices.ga !== undefined) {
    services = [
      ...services,
      setService(
        defaultServices.ga.label,
        () => initGa(defaultServices.ga.code),
        defaultServices.ga.description
      )
    ];
  }

  if (defaultServices.gtm !== undefined) {
    services = [
      ...services,
      setService(
        defaultServices.gtm.label,
        () => initGtm(defaultServices.gtm.code),
        defaultServices.gtm.description
      )
    ];
  }

  if (defaultServices.hotjar !== undefined) {
    services = [
      ...services,
      setService(
        defaultServices.hotjar.label,
        () => initHotjar(defaultServices.hotjar.code),
        defaultServices.hotjar.description
      )
    ];
  }

  if (customServices !== undefined && customServices.length > 0) {
    customServices.map(customService => {
      services = [
        ...services,
        setService(
          customService.label,
          customService.callback,
          customService.description
        )
      ];
    });
  }

  return services;
};
