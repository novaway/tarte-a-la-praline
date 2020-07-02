import { Service } from "../../types";

const CustomSelection = (services: Service[]): string => `
  <div id="custom-selection">
    <form id="js-custom-cookie-form" class="custom-cookie-form">
        ${services
          .map(
            ({ name }) =>
              `
                <div style="margin-bottom: 5px;">
                  <span style="padding-right: 5px; padding-top: 3px;"><input type="checkbox" id=${name} name=${name} value="true"></span>
                  <label for=${name}>${name}</label>
                </div>
              `
          )
          .join("")}
        <div>
          <button type="submit" class="cookie-banner-button js-button-save-custom" data-micromodal-close>
            <span>${
              (window as any).tarteALaPralineLanguage.BUTTON_VALIDATION
            }</span>
          </button>
        </div>
    </form>
  </div>
`;

export default CustomSelection;
