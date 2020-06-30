const initHotjar = (code: string): void => {
  // @ts-ignore
  (function(h: any, o: any, t: any, j: any, a: any, r: any): void {
    h.hj =
      h.hj ||
      function() {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: parseInt(code), hjsv: 5 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "//static.hotjar.com/c/hotjar-", ".js?sv=");
};

export default initHotjar;
