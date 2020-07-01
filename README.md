# Tarte à la praline - Enable user tracking services helper library

<a href="https://www.npmjs.com/package/@novaway/tarte-a-la-praline"><img src="https://img.shields.io/npm/v/@novaway/tarte-a-la-praline.svg" alt="npm Version"></a>
<a href="https://npmcharts.com/compare/@novaway/tarte-a-la-praline?minimal=true"><img src="https://img.shields.io/npm/dw/@novaway/tarte-a-la-praline.svg" alt="npm Downloads"></a>
<a href="https://packagequality.com/#?package=@novaway%2Ftarte-a-la-praline"><img src="https://npm.packagequality.com/shield/@novaway%2Ftarte-a-la-praline.svg" alt="Package Quality"></a>
<a href="https://david-dm.org/novaway/tarte-a-la-praline" title="dependencies status"><img src="https://david-dm.org/novaway/tarte-a-la-praline/status.svg"/></a>

> TODO

**Not production ready**

## Features

TODO

🔷 Write in TypeScript

## Install

First download package :

`npm i @novaway/tarte-a-la-praline`

Then import module :

```
import '@novaway/tarte-a-la-praline/translations/en';
import initTarteALaPraline from '@novaway/tarte-a-la-praline';
```

## Basic Usage

**Example**

```
import '@novaway/tarte-a-la-praline/translations/en';
import initTarteALaPraline from '@novaway/tarte-a-la-praline';

initTarteALaPraline({
  codeGa: string,
  codeHj: string
})
```

Default included services is [Google Analytics](https://analytics.google.com/analytics/web/) and [Hotjar](https://www.hotjar.com/). You can add custom service like this, example with **Matomo** :

```
import '@novaway/tarte-a-la-praline/translations/en';
import initTarteALaPraline from '@novaway/tarte-a-la-praline';

initTarteALaPraline({
  customServices: [
    {
      name: "matomo",
      callBack: initMatomoTagManager
    }
  ]
});

const initMatomoTagManager = () => {
  var _mtm = _mtm || [];
  _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript';
  g.async=true;
  g.defer=true;
  g.src='http://your-instance.com/matomo/js/container_YourID.js';
  s.parentNode.insertBefore(g,s);
};
```

**i18n**

This module comming with EN and FR translations and need to be imported defore init function. You can add custom translations by adding language parameters :

```
import initTarteALaPraline from '@novaway/tarte-a-la-praline';

initTarteALaPraline({
  codeGa: "XXXX",
  language: {
    TEXT_BANNER: string;
    BUTTON_AGREE: string;
    BUTTON_DECLINE: string;
    BUTTON_CUSTOM: string;
    BUTTON_VALIDATION: string;
    HEADER_MODAL: string;
  }
});
```

## Commands

Running dev environment :

`npm start`

Build production environment :

`npm run build-prod`

## Browser compatibility

TODO

## TODO

- [x] translations module
- [ ] Adding possibility to custom default CSS
- [ ] Zero dependencies
- [ ] Tests
