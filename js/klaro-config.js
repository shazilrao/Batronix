/*
By default, Klaro will load the config from a global 'klaroConfig' variable. You
can change this by specifying the 'data-klaro-config' attribute on your script:
<script src="klaro.js" data-klaro-config="myConfigVariableName"
*/
var klaroConfig = {
    /*
    Styling: SCSS variables
     */
    styling: {
        'white2': '#ccc',
        'white3': 'white',
        'green1': '#2196F3',
        'green2': '#2196F3',
        'dark2': '#17a2b8',
        'blue1': '#2196F3',
        //'blue1': '#28a745',
        //'dark2': '#5c5c5c',
        //'white3': '#D4D4D4',
        theme:  ['light']
    },

    /*
    Setting 'testing' to 'true' will cause Klaro to not show the consent notice or
    modal by default, except if a special hash tag is appended to the URL (#klaro-
    testing). This makes it possible to test Klaro on your live website without
    affecting normal visitors.
    */
    testing: false,

    /*
    You can customize the ID of the DIV element that Klaro will create when starting
    up. By default, Klaro will use 'klaro'.
    */
    elementID: 'klaro',

    /*
    You can customize how Klaro persists consent information in the browser. Specify
    either cookie' (the default) or 'localStorage'.
    */
    storageMethod: 'cookie',

    /*
    You can customize the name of the cookie or localStorage entry that Klaro will
    use for storing the consent information. By default, Klaro will use 'klaro'.
    */
    storageName: 'bxconsent',

    /*
    If set to `true`, Klaro will render the texts given in the
    `consentModal.description` and `consentNotice.description` translations as HTML.
    This enables you to e.g. add custom links or interactive content.
    */
    htmlTexts: true,

    /*
    You can change the cookie domain for the consent manager itself. Use this if you
    want to get consent once for multiple matching domains. By default, Klaro will
    use the current domain. Only relevant if 'storageMethod' is set to 'cookie'.
    */
    cookieDomain: '.batronix.com',

    /*
    You can also set a custom expiration time for the Klaro cookie. By default, it
    will expire after 30 days. Only relevant if 'storageMethod' is set to 'cookie'.
    */
    cookieExpiresAfterDays: 30,

    /*
    Defines the default state for services in the consent modal (true=enabled by
    default). You can override this setting in each service.
    */
    default: false,

    /*
    If 'mustConsent' is set to 'true', Klaro will directly display the consent
    manager modal and not allow the user to close it before having actively
    consented or declined the use of third-party services.
    */
    mustConsent: false,
    noNotice: false,

    /*
    Setting 'acceptAll' to 'true' will show an "accept all" button in the notice and
    modal, which will enable all third-party services if the user clicks on it. If
    set to 'false', there will be an "accept" button that will only enable the
    services that are enabled in the consent modal.
    */
    acceptAll: true,

    /*
    Setting 'hideDeclineAll' to 'true' will hide the "decline" button in the consent
    modal and force the user to open the modal in order to change his/her consent or
    disable all third-party services. We strongly advise you to not use this
    feature, as it opposes the "privacy by default" and "privacy by design"
    principles of the GDPR (but might be acceptable in other legislations such as
    under the CCPA)
    */
    hideDeclineAll: false,

    /*
    Setting 'hideLearnMore' to 'true' will hide the "learn more / customize" link in
    the consent notice. We strongly advise against using this under most
    circumstances, as it keeps the user from customizing his/her consent choices.
    */
    hideLearnMore: false,

    disablePoweredBy: true,

    /*
    You can overwrite existing translations and add translations for your service
    descriptions and purposes. See `src/translations/` for a full list of
    translations that can be overwritten:
    https://github.com/KIProtect/klaro/tree/master/src/translations
    */
    translations: {
        de: {
            purposes: {
                essential: {
                    title: 'Onlineshop',
                },
                payment: {
                    title: 'Zahlungsdienste'
                },
                reviews: {
                    title: 'Unabhängige Produktbewertungen'
                },
                multimedia: {
                    title: 'Produktmedien'
                },
                socialMedia: {
                    title: 'Soziale Netzwerke'
                },
                analytics: {
                    title: 'Besucher-Statistiken'
                },
            },
            privacyPolicyUrl: '/versand/verkauf/Datenschutz.html',
            consentNotice: {
                description: 'Guten Tag! Wir würden gerne zusätzliche Dienste für {purposes} aktivieren. Sie können Ihre Zustimmung später jederzeit ändern oder zurückziehen.'
            },
            consentModal: {
                description: 'Hier können Sie die Dienste, die wir auf dieser Website nutzen möchten, beurteilen und anpassen. Aktivieren oder deaktivieren Sie die Dienste, wie Sie es für richtig halten.'
            }
        },
        en: {
            purposes: {
                essential: {
                    title: 'Onlineshop',
                },
                payment: {
                    title: 'Payment services'
                },
                reviews: {
                    title: 'Independent product reviews'
                },
                multimedia: {
                    title: 'Product media'
                },
                socialMedia: {
                    title: 'Social networks'
                },
                analytics: {
                    title: 'Visitor statistics'
                },
            },
            privacyPolicyUrl: '/shop/shopping/privacy.html',
            consentNotice: {
                description: 'Hello! We would like to enable some additional services for {purposes}? You can always change or withdraw your consent later.'
            },
            consentModal: {
                description: 'Here you can assess and customize the services that we\'d like to use on this website. Enable or disable services as you see fit.'
            }
        },
        zz: {
            purposes: {
                essential: {
                    title: 'Onlineshop',
                },
                payment: {
                    title: 'Payment services'
                },
                reviews: {
                    title: 'Independent product reviews'
                },
                multimedia: {
                    title: 'Product media'
                },
                socialMedia: {
                    title: 'Social networks'
                },
                analytics: {
                    title: 'Visitor statistics'
                },
            },
            privacyPolicyUrl: '/shop/shopping/privacy.html',
            consentNotice: {
                description: 'Hello! We would like to enable some additional services for {purposes}? You can always change or withdraw your consent later.'
            },
            consentModal: {
                description: 'Here you can assess and customize the services that we\'d like to use on this website. Enable or disable services as you see fit.'
            }
        },
    },

    /*
    Here you specify the third-party services that Klaro will manage for you.
    */
    services: [
        {
            name: 'klaro-batronixShop',
            default: true,
            required: true,
            translations: {
                de: {
                    title: 'Batronix Onlineshop',
                    description: 'Unsere Plattform für den elektronischen Versandhandel, auf der wir Waren und Dienstleistungen anbieten und verkaufen.',
                },
                en: {
                    title: 'Batronix Onlineshop',
                    description: 'Our platform for electronic commerce, where we offer and sell goods and services.',
                },
                zz: {
                    title: 'Batronix Onlineshop',
                    description: 'Our platform for electronic commerce, where we offer and sell goods and services.',
                },
            },
            purposes: ['essential'],
        },
        {
            name: 'klaro-batronixHelpDesk',
            default: true,
            required: true,
            translations: {
                de: {
                    title: 'Batronix Helpdesk',
                    description: 'Unser Helpdesk erlaubt es uns Kundenanfragen entgegenzunehmen, zu verwalten und zu bearbeiten. Hier können wir Sie per Chat, E-Mail oder Ticket unterstützen.',
                },
                en: {
                    title: 'Batronix Helpdesk',
                    description: 'Our helpdesk allows us to receive, manage and process customer enquiries. Here we can support you via chat, email or ticket.',
                },
                zz: {
                    title: 'Batronix Helpdesk',
                    description: 'Our helpdesk allows us to receive, manage and process customer enquiries. Here we can support you via chat, email or ticket.',
                },
            },
            purposes: ['essential'],
        },
        {
            name: 'klaro-jsdelivr',
            default: true,
            required: true,
            translations: {
                de: {
                    title: 'jsDelivr',
                    description: 'Das Content Delivery Network jsDelivr erlaubt es uns den Weg zwischen bestimmten Daten unseres Onlineshops und den Endgeräten unserer Kunden zu verkürzen. Dies reduziert für Sie die Ladezeiten unseres Angebotes.'
                },
                en: {
                    title: 'jsDelivr',
                    description: 'The Content Delivery Network jsDelivr allows us to shorten the path between certain data of our onlineshop and the end devices of our customers. For you this reduces the loading times when visting us.'
                },
                zz: {
                    title: 'jsDelivr',
                    description: 'The Content Delivery Network jsDelivr allows us to shorten the path between certain data of our onlineshop and the end devices of our customers. For you this reduces the loading times when visting us.'
                },
            },
            purposes: ['essential'],
        },
        {
            name: 'klaro-polyfill',
            default: true,
            required: true,
            translations: {
                de: {
                    title: 'Polyfill.io',
                    description: 'Um auch Kunden mit älteren Endgeräten & Browsern alle Funktionen unseres Onlineshops bereitstellen zu können, nutzen wir Polyfill.io. Wir erhalten so Zugriff auf Schnittstellen, die anderenfalls eigentlich nur auf neueren Endgeräten verfügbar wären.'
                },
                en: {
                    title: 'Polyfill.io',
                    description: 'In order to be able to provide all the functions of our onlineshop to customers with older devices & browsers, we use Polyfill.io. This gives us access to interfaces that would otherwise actually only be available on newer end devices.'
                },
                zz: {
                    title: 'Polyfill.io',
                    description: 'In order to be able to provide all the functions of our online shop to customers with older devices & browsers, we use Polyfill.io. This gives us access to interfaces that would otherwise actually only be available on newer end devices.'
                },
            },
            purposes: ['essential'],
        },
        {
            name: 'klaro-paypal',
            default: true,
            required: true,
            translations: {
                de: {
                    title: 'PayPal',
                    description: 'Bezahlung Ihrer Einkäufe über PayPal. Das bedeutet für Sie eine einfache Handhabung während des Bezahlvorgangs und eine schnelle Ausführung der Transaktionen.'
                },
                en: {
                    title: 'PayPal',
                    description: 'Payment of your purchases via PayPal. For you, this means easy handling during the payment process and fast execution of transactions.'
                },
                zz: {
                    title: 'PayPal',
                    description: 'Payment of your purchases via PayPal. For you, this means easy handling during the payment process and fast execution of transactions.'
                },
            },
            purposes: ['payment'],
        },
        {
            name: 'klaro-unzer',
            default: true,
            required: true,
            translations: {
                de: {
                    title: 'Unzer',
                    description: 'Bezahlung Ihrer Einkäufe per Kreditkarte oder Sofortüberweisung über den Zahlungsdienstleister Unzer. Das bedeutet für Sie die unkomplizierte Bezahlung mit dem Zahlungsmittel Ihrer Wahl, auf Wunsch auch mit Ihren Online-Banking-Daten.'
                },
                en: {
                    title: 'Unzer',
                    description: 'Payment of your purchases by credit card or instant bank transfer (Sofortüberweisung) via the payment service provider Unzer. For you, this means uncomplicated payment with the payment method of your choice, if desired also with your online banking data.'
                },
                zz: {
                    title: 'Unzer',
                    description: 'Payment of your purchases by credit card or instant bank transfer (Sofortüberweisung) via the payment service provider Unzer. For you, this means uncomplicated payment with the payment method of your choice, if desired also with your online banking data.'
                },
            },
            purposes: ['payment'],
        },
        {
            name: 'klaro-yotpo',
            default: false,
            translations: {
                de: {
                    title: 'yotpo.',
                    description: 'Geben Sie direkt und einfach Ihr Feedback/Ihre Bewertung zu unseren Produkten ab. Wir setzen dazu auf den Dienstleister yotpo.',
                },
                en: {
                    title: 'yotpo.',
                    description: 'Give your feedback/rating on our products directly and easily. We use the service provider yotpo for this purpose.',
                },
                zz: {
                    title: 'yotpo.',
                    description: 'Give your feedback/rating on our products directly and easily. We use the service provider yotpo for this purpose.',
                },
            },
            cookies: [

            ],
            purposes: ['reviews'],
        },
        {
            name: 'klaro-youtube',
            default: false,
            translations: {
                de: {
                    title: 'YouTube',
                    description: 'Einbindung und Bereitstellung von (Produkt-)Medien über das Videoportal YouTube, damit Sie sich ein besseres Bild von unseren Produkten machen können.'
                },
                en: {
                    title: 'YouTube',
                    description: 'Integration and provision of (product) media via the video portal YouTube so that you can get a better picture of our products.'
                },
                zz: {
                    title: 'YouTube',
                    description: 'Integration and provision of (product) media via the video portal YouTube so that you can get a better picture of our products.'
                },
            },
            cookies: [
                    //[/^.*$/, '/', 'youtube.com'],
            ],
            purposes: ['multimedia'],
        },
        {
            name: 'klaro-vimeo',
            default: false,
            translations: {
                de: {
                    title: 'Vimeo',
                    description: 'Einbindung und Bereitstellung von (Produkt-)Medien über das Videoportal Vimeo, damit Sie sich ein besseres Bild von unseren Produkten machen können.'
                },
                en: {
                    title: 'Vimeo',
                    description: 'Integration and provision of (product) media via the video portal Vimeo so that you can get a better picture of our products.'
                },
                zz: {
                    title: 'Vimeo',
                    description: 'Integration and provision of (product) media via the video portal Vimeo so that you can get a better picture of our products.'
                },
            },
            cookies: [
                //[/^.*$/, '/', 'vimeo.com'],
            ],
            purposes: ['multimedia'],
        },
        {
            name: 'klaro-facebook',
            default: false,
            translations: {
                de: {
                    title: 'facebook',
                    description: 'Integration und Referenz von Inhalten unserer facebook-Seite. So können Sie Ihre Meinung zu Batronix direkt mit anderen Kunden teilen.'
                },
                en: {
                    title: 'facebook',
                    description: 'Integration and reference of content from our facebook page. This way you can easily share your opinion about Batronix with other customers.'
                },
                zz: {
                    title: 'facebook',
                    description: 'Integration and reference of content from our facebook page. This way you can easily share your opinion about Batronix with other customers.'
                },
            },
            cookies: [
                //[/^.*$/, '/', 'facebook.com'],
            ],
            purposes: ['socialMedia'],
        },
        {
            name: 'klaro-googleAnalytics',
            default: false,
            translations: {
                de: {
                    title: 'Google Analytics',
                    description:'Auswertung der Nutzerinteraktionen mit unseren Onlineangeboten und statistische Analyse der Zugriffe über Google Dienste zur Verbesserung unserer Inhalte und unseres Produktsortimentes.',
                },
                en: {
                    title: 'Google Analytics',
                    description: 'Evaluation of user interactions with our online offers and statistical analysis of access via Google services to improve our content and product range.'
                },
                zz: {
                    title: 'Google Analytics',
                    description: 'Evaluation of user interactions with our online offers and statistical analysis of access via Google services to improve our content and product range.'
                },
            },
            cookies: [
                ['_ga', '/', '.batronix.com'],
                ['_gid', '/', '.batronix.com'],
                ['_gat', '/', '.batronix.com'],
                ['__utma', '/', '.batronix.com'],
                ['__utmt', '/', '.batronix.com'],
                ['__utmb', '/', '.batronix.com'],
                ['__utmc', '/', '.batronix.com'],
                ['__utmz', '/', '.batronix.com'],
                ['__utmv', '/', '.batronix.com'],
                ['AMP_TOKEN', '/', '.batronix.com'],
                ['/^_gac_.*$/', '/', '.batronix.com']
            ],
            purposes: ['analytics'],
        },
        {
            name: 'klaro-gotopro',
            default: false,
            translations: {
                de: {
                    title: 'Add2it Go-To Pro',
                    description:'Vorgefertigten Webseiten-Verweise, die es uns erlauben, den Erfolg von Kommunikationen oder Inhalten zu messen.',
                },
                en: {
                    title: 'Add2it Go-To Pro',
                    description: 'Pre-built website links that allow us to measure the success of communications or content.'
                },
                zz: {
                    title: 'Add2it Go-To Pro',
                    description: 'Pre-built website links that allow us to measure the success of communications or content.'
                },
            },
            cookies: [
                ['GTPcookie', '/', '.batronix.com']
            ],
            purposes: ['analytics'],
        }
    ],

    /*
    You can define an optional callback function that will be called each time the
    consent state for any given service changes. The consent value will be passed as
    the first parameter to the function (true=consented). The `service` config will
    be passed as the second parameter.
    */
    callback: function (consent, service) {
        /*
        console.log(
            'User consent for service ' + service.name + ': consent=' + consent
        );
        */
    },

};

