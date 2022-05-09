const deconstructTALP = () => {
    const $cookieBannerContainer = document.getElementById('js-cookie-banner-container');
    const $cookieModal = document.getElementById('js-cookie-modal');

    $cookieBannerContainer.remove();
    $cookieModal.remove();
}

export default deconstructTALP;