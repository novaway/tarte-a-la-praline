// @ts-nocheck

const initMatomo = (url, id) => {
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    _paq.push(['requireCookieConsent']);
    (function() {
      var u=`//${url}/`;
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', id]);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src='//cdn.matomo.cloud/novaway.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
    })();
  }

  export default initMatomo;