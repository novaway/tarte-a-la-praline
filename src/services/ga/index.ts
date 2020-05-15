declare var ga: Function;

const initGa = (code: number | string) => {
  (function(i, s, o, g, r, a, m): void {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * (new Date() as any));
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );

  ga("create", code, "auto");
  ga("require", "displayfeatures");
  ga("set", "anonymizeIp", true);
  ga("send", "pageview");
};

export default initGa;
