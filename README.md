# Banner cookie - Enable user tracking services helper library

<a href="https://www.npmjs.com/package/@novaway/banner-cookie"><img src="https://img.shields.io/npm/v/@novaway/banner-cookie.svg" alt="npm Version"></a>
<a href="https://npmcharts.com/compare/@novaway/banner-cookie?minimal=true"><img src="https://img.shields.io/npm/dw/@novaway/banner-cookie.svg" alt="npm Downloads"></a>
<a href="https://packagequality.com/#?package=@google%2Fclasp"><img src="https://npm.packagequality.com/shield/@google%2Fclasp.svg" alt="Package Quality"></a>
<a href="https://david-dm.org/novaway/banner-cookie" title="dependencies status"><img src="https://david-dm.org/novaway/banner-cookie/status.svg"/></a>

> TODO

## Features

TODO

🔷 Write in TypeScript

## Install

First download package :

`npm i @novaway/banner-cookie`

Then import module :

`import { init } from '@novaway/banner-cookie';`

## Basic Usage

**Example**

```
import {
  init as initBannerCookie
} from '@novaway/banner-cookie';

initBannerCookie({
  codeGa: "XXXX",
  codeHj: "XXXX"
})
```

Default included services is [Google Analytics](https://analytics.google.com/analytics/web/) and [Hotjar](https://www.hotjar.com/). You can add custom services like this :

```
import {
  init as initBannerCookie
} from '@novaway/banner-cookie';

initBannerCookie({
  codeGa: "XXXX",
  codeHj: "XXXX",
  customServics: [
    {
      name: "myCustomServices",
      callBack: () => ...
    }
  ]
})
```

## Commands

Running dev environment :

`npm start`

Build production environment :

`npm run build-prod`

## Browser compatibility

TODO
