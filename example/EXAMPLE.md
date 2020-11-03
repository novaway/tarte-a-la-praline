# Examples

Table of contents

-   [Basic Usage](basic-usage)
-   [Custom service](custom-service)
-   [i18n](i18n)
-   [HTML Classes](html-classes)
-   [Primary color](primary-color)

## Basic Usage

```
import '@novaway/tarte-a-la-praline/dist/cookieBanner.css'; // default banner styles
import '@novaway/tarte-a-la-praline/dist/modal.css'; // default modal styles
import '@novaway/tarte-a-la-praline/translations/en';
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  codeGa: string,
  codeHj: string
})
```

The current version includes a default configuration for the following services :

-   [Google Analytics](https://analytics.google.com/analytics/web/)
-   [Hotjar](https://www.hotjar.com/).

## Custom service

You can add custom service. Here is an example for **Matomo** :

```
import '@novaway/tarte-a-la-praline/translations/en';
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  customServices: [
    {
      name: "matomo",
      callBack: initMatomoTagManager
    }
  ],
  ...
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

## i18n

This module comes with EN and FR translations that should be imported before the init function.

```
import '@novaway/tarte-a-la-praline/translations/en'; // en or fr
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  codeGa: "XXXX"
});
```

You can easily add new language by removing the language import and set `language` parameter :

```
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  language: {
    TEXT_BANNER: string;
    BUTTON_AGREE: string;
    BUTTON_DECLINE: string;
    BUTTON_CUSTOM: string;
    BUTTON_VALIDATION: string;
    HEADER_MODAL: string;
    HEADER_MODAL_BUTTON_CLOSE: string;
  },
  ...
});
```

PR for new language are welcome :)

## HTML Classes

The default main classes can be overriden :

```
import '@novaway/tarte-a-la-praline/translations/en'; // en or fr
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  className: {
    banner: "cookie-banner",
    text: "cookie-banner-text",
    button: "cookie-banner-button",
    modalContainer: "modal-container",
    modalTitle: "modal-title",
    modalField: "modal-field"
  }
  ...
});
```

## Primary color

`primaryColor` parameter define the default text color, button background et banner border color. The default value is _black_.

```
import '@novaway/tarte-a-la-praline/translations/en'; // en or fr
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  primaryColor: '#808080',
  ...
});
```

## Styles

The default CSS is not included in order to leave the choice to the user to import or not his own style.

Import default CSS :

```
import '@novaway/tarte-a-la-praline/dist/cookieBanner.css'; // default banner styles
import '@novaway/tarte-a-la-praline/dist/modal.css'; // default modal styles
import '@novaway/tarte-a-la-praline/translations/fr';
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  ...
});
```
