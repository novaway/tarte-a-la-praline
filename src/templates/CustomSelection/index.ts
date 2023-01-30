import { Service } from "../../types";

const CustomSelection = (services: Service[]): string => {
const { language, className } = (window as any).TALP_SETTINGS;

const contentService = (id, label, description) => `
<div class="${
  className.modalField
}" style="margin-bottom: 10px;">
  <span style="padding-right: 5px; padding-top: 3px;"><input class="input-service" style="margin-left:0" type="checkbox" id=${id} name=${id} value="true"></span>
  <label for=${id}>${label}</label>
  </div>
  ${
    description !== undefined
      ? `<div class="${className.modalFieldDescription}">${description}</div>`
      : ""
  }

`

const contentCategorie = (categorie, cookieCatgorieLabel, categorieId) => {
  if (categorie === 'autre'){
    if(services.filter((service) => service.categorie === categorie || service.categorie === undefined).length > 0){
      return `<div class="categorie-${categorieId}"><div class="talp-modal-categorie-header"><p class="talp-modal-categorie-title">${cookieCatgorieLabel}</p>
      <label class="talp-modal-switch">
        <input class="input-categorie" id="input-categorie-${categorieId}" type="checkbox">
        <span class="talp-modal-slider"></span>
      </label>
    </div>
      ${services.filter((service) => service.categorie === categorie)
      .map(
        ({ id, label, description }) =>
        contentService(id, label, description)
      )
      .join("")}</div>`
    }
    else{
      return ``
    }
  }
  else{
    if(services.filter((service) => service.categorie === categorie).length > 0){
    return `<div class="categorie-${categorieId}"><div class="talp-modal-categorie-header"><p class="talp-modal-categorie-title">${cookieCatgorieLabel}</p>
      <label class="talp-modal-switch">
        <input class="input-categorie" id="input-categorie-${categorieId}" type="checkbox">
        <span class="talp-modal-slider"></span>
      </label>
    </div>
      ${services.filter((service) => service.categorie === categorie)
      .map(
        ({ id, label, description }) =>
        contentService(id, label, description)
      )
      .join("")}</div>`
    }
    else{
      return ``
    }
  }
}

  return `
    <div id="custom-selection">
      <form id="js-custom-cookie-form" class="custom-cookie-form">
        
        ${contentCategorie('perf', language.COOKIE_PERF, 1)}
        ${contentCategorie('ads', language.COOKIE_ADS, 2)}
        ${contentCategorie('measure', language.COOKIE_MEASURE, 3)}
        ${contentCategorie('autre', language.COOKIE_OTHER, 0)}

          <div>
            <button type="submit" class="${
              className.button
            } js-button-save-custom">
              <span>${language.BUTTON_VALIDATION}</span>
            </button>
          </div>
      </form>
    </div>
  `;
};

export default CustomSelection;
