# Examples

## Basic Usage

```
import '@novaway/tarte-a-la-praline/dist/cookieBanner.css'; // default banner styles
import '@novaway/tarte-a-la-praline/dist/modal.css'; // default modal styles
import '@novaway/tarte-a-la-praline/translations/en';
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
   defaultServices: {
      ga: {
        code: "gaCode",
        label: "google analitycs",
        description:
          "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>"
      },
      hotjar: {
        code: "hotjarCode",
        label: "Hotjar"
      },
      gtm: {
        code: "gtmCode",
        label: "Google tag manager"
      }
    }
})
```

The current version includes a default configuration for the following services :

-   [Google Analytics](https://analytics.google.com/analytics/web/)
-   [Google Tag Manager](https://marketingplatform.google.com/intl/fr/about/tag-manager/)
-   [Hotjar](https://www.hotjar.com/)

## Custom service

You can add custom service. Here is an example for **Matomo** :

```
import '@novaway/tarte-a-la-praline/translations/en';
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  customServices: [
    {
      label: "matomo Service",
      callback: initMatomoTagManager,
      description:
          "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>"
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

This module comes with EN, FR and DE translations that should be imported before the init function.

```
import '@novaway/tarte-a-la-praline/translations/en'; // en, fr or de
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  defaultServices: {
      ga: {
        code: "gaCode",
        label: "google analitycs",
        description:
          "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>"
      }
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
    SUBTITLE_MODALE: string;
    MODAL_FOOTER_TEXT: string;
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
    bannerContent: "cookie-banner-content",
    text: "cookie-banner-text",
    button: "cookie-banner-button",
    modalContainer: "modal-container",
    modalTitle: "modal-title",
    modalField: "modal-field",
    modalFieldDescription: "modal-field-description"
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

If you using SASS :

```
@import ~tarte-a-la-praline/dist/cookieBanner.css
@import ~tarte-a-la-praline/dist/modal.css
```

## Time limit

TALP makes it possible to set the duration before the next display of the banner. By default, the duration is 1 year.

The **distanceToNow** parameter is based on the [formatDistanceToNow](https://date-fns.org/docs/formatDistanceToNow) function of the [date-fns](https://date-fns.org/) module. With this, it's possible to fine-tune the time control before the banner is displayed again: minutes, hours, days, weeks, months and year.

```
import '@novaway/tarte-a-la-praline/translations/de';
import initTALP from '@novaway/tarte-a-la-praline';

initTALP({
  ...,
  distanceToNow: '1 day'
});
```
