import initGa from "../services/ga";
import initGtm from "../services/gtm";
import initHotjar from "../services/hotjar";
import initMatomo from "../services/matomo";
import { Service, DefaultServices } from "../types";
import camelCase from "./camelCase";

const setService = (
  label: string,
  callback: () => void,
  description?: string,
  executeIfDeny?: () => void,
  categorie?: string
): Service => ({
  id: camelCase(label),
  label,
  callback,
  description,
  executeIfDeny,
  categorie
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
        defaultServices.ga.description,
        defaultServices.ga.executeIfDeny,
        'measure'
      )
    ];
  }

  if (defaultServices.gtm !== undefined) {
    services = [
      ...services,
      setService(
        defaultServices.gtm.label,
        () => initGtm(defaultServices.gtm.code),
        defaultServices.gtm.description,
        defaultServices.gtm.executeIfDeny,
        'measure'
      )
    ];
  }

  if (defaultServices.hotjar !== undefined) {
    services = [
      ...services,
      setService(
        defaultServices.hotjar.label,
        () => initHotjar(defaultServices.hotjar.id, defaultServices.hotjar.sv),
        defaultServices.hotjar.description,
        defaultServices.hotjar.executeIfDeny,
        'measure',
      )
    ];
  }

  if (defaultServices.matomo !== undefined) {
    services = [
      ...services,
      setService(
        defaultServices.matomo.label,
        () => initMatomo(defaultServices.matomo.url, defaultServices.matomo.id),
        defaultServices.matomo.description,
        defaultServices.matomo.executeIfDeny,
        'measure'
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
          customService.description,
          customService.executeIfDeny,
          customService.categorie ? customService.categorie : 'autre'
        )
      ];
    });
  }

  return services;
};
