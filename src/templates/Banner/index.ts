const Banner = (primaryColor: string): string => `
  <style>
    .cookie-banner-button {
      color: ${primaryColor}
    }
  </style>
  <div id="banner-cookie" class="cookie-banner" style="color: ${primaryColor};">
    <p class="cookie-banner-text">
      ${(window as any).tarteALaPralineLanguage.TEXT_BANNER}
    </p>
    <div class="cookie-banner-buttons-wrapper">
      <button class="cookie-banner-button js-cookie-button-allow"><span>${
        (window as any).tarteALaPralineLanguage.BUTTON_AGREE
      }</span></button>
      <button class="cookie-banner-button js-cookie-button-deny"><span>${
        (window as any).tarteALaPralineLanguage.BUTTON_DECLINE
      }</span></button>
      <button class="cookie-banner-button js-cookie-button-customize" data-micromodal-trigger="js-cookie-modal"><span>${
        (window as any).tarteALaPralineLanguage.BUTTON_CUSTOM
      }</span></button>
    </div>
  </div>
`;

export default Banner;
