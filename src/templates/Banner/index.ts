import {
  TEXT_BANNER,
  BUTTON_CUSTOM,
  BUTTON_DECLINE,
  BUTTON_AGREE,
} from "../../translation";

const Banner = () => `
     <div id="banner-cookie" class="cookie-banner">
          <p class="cookie-banner-text">
              ${TEXT_BANNER}
          </p>
          <div class="cookie-banner-buttons-wrapper">
               <button class="cookie-banner-button js-cookie-button-allow">${BUTTON_AGREE}</button>
               <button class="cookie-banner-button js-cookie-button-deny">${BUTTON_DECLINE}</button>
               <button class="cookie-banner-button js-cookie-button-customize" data-micromodal-trigger="js-cookie-modal">${BUTTON_CUSTOM}</button>
          </div>
    </div>
`;

export default Banner;
