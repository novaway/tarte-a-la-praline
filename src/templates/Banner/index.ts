const Banner = (primaryColor: string): string => {
  const { language, className } = (window as any).TALP_SETTINGS;

  return `
    <style>
      .talp-cookie-banner-button {
        color: ${primaryColor}
      }
    </style>
    <div id="js-cookie-banner" class="${className.banner}" style="color: ${primaryColor};">
      <div class="${className.bannerContent}">
        <p class="${className.text}">
          ${language.TEXT_BANNER}
        </p>
        <div class="talp-cookie-banner-buttons-wrapper">
          <button class="${className.button} js-cookie-button-allow"><span>${language.BUTTON_AGREE}</span></button>
          <button class="${className.button} js-cookie-button-deny"><span>${language.BUTTON_DECLINE}</span></button>
          <button class="${className.button} js-cookie-button-customize"><span>${language.BUTTON_CUSTOM}</span></button>
        </div>
      </div>
    </div>
  `;
};

export default Banner;
