const Banner = () => `
     <div id="banner-cookie" class="cookie-banner">
          <p class="cookie-banner-text">
              ${(window as any).tarteALaPralineLanguage.TEXT_BANNER}
          </p>
          <div class="cookie-banner-buttons-wrapper">
               <button class="cookie-banner-button js-cookie-button-allow">${
                 (window as any).tarteALaPralineLanguage.BUTTON_AGREE
               }</button>
               <button class="cookie-banner-button js-cookie-button-deny">${
                 (window as any).tarteALaPralineLanguage.BUTTON_DECLINE
               }</button>
               <button class="cookie-banner-button js-cookie-button-customize" data-micromodal-trigger="js-cookie-modal">${
                 (window as any).tarteALaPralineLanguage.BUTTON_CUSTOM
               }</button>
          </div>
    </div>
`;

export default Banner;
