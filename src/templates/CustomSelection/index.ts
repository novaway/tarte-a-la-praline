import { Service } from "../../types";

const CustomSelection = (services: Service[]): string => {
  const { language, className } = (window as any).TALP_SETTINGS;

  return `
    <div id="custom-selection">
      <form id="js-custom-cookie-form" class="custom-cookie-form">
        ${services
          .map(
            ({ id, description, label }) =>
              `
                <div class="${
                  className.modalField
                }" style="margin-bottom: 10px;">
                  <span style="padding-right: 5px; padding-top: 3px;"><input style="margin-left:0" type="checkbox" id=${id} name=${id} value="true"></span>
                  <label for=${id}>${label}</label>
                  </div>
                  ${
                    description !== undefined
                      ? `<div class="${className.modalFieldDescription}">${description}</div>`
                      : ""
                  }

              `
          )
          .join("")}
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
