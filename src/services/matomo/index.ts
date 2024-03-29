// @ts-nocheck

const initMatomo = (url, id) => {
  const _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    const u = url;
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', id]);
    const d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
}

export default initMatomo;
