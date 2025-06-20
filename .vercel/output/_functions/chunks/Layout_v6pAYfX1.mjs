/* empty css                         */
import i18next from 'i18next';
import fsBackend from 'i18next-fs-backend';
import { b as createAstro, c as createComponent, e as addAttribute, a as renderTemplate, m as maybeRenderHead, r as renderComponent, f as renderScript, g as renderSlot, h as renderHead, u as unescapeHTML } from './astro/server_Bj0t9SUF.mjs';
import 'clsx';
import module2, { createRequire } from 'module';
import require$$0$1 from 'path';
import * as require$$0 from 'url';
import { stat, readdir, readFile } from 'fs';
import { promisify } from 'util';
import 'os';
import 'child_process';
import 'crypto';
import 'tty';
import { $ as $$Image } from './_astro_assets_BwBN8yrF.mjs';

promisify(stat);
promisify(readdir);

var cjs;
var hasRequiredCjs;

function requireCjs () {
	if (hasRequiredCjs) return cjs;
	hasRequiredCjs = 1;

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return Object.propertyIsEnumerable.call(target, symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function propertyIsOnObject(object, property) {
		try {
			return property in object
		} catch(_) {
			return false
		}
	}

	// Protects from prototype poisoning and unexpected merging up the prototype chain.
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) {
				return
			}

			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			} else {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
		// implementations can use it. The caller may not replace it.
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	cjs = deepmerge_1;
	return cjs;
}

requireCjs();

createRequire(import.meta.url);

promisify(stat);
promisify(readdir);
promisify(readFile);
createRequire(import.meta.url);

module2.createRequire(import.meta.url);
const __filename = require$$0.fileURLToPath(import.meta.url);
require$$0$1.dirname(__filename);
var g = { config: { defaultLocale: "cimode", locales: [], namespaces: "translation", defaultNamespace: "translation", load: ["server"], routes: {}, flatRoutes: {}, showDefaultLocale: false, trailingSlash: "ignore", resourcesBasePath: "/locales" } }, A = (e) => {
  let r = {};
  for (let n in e) n === "routes" && (r = y(e[n])), g.config[n] = e[n];
  g.config.flatRoutes = r;
}, y = (e, r = [], n = [], s = null) => {
  let o = s || {};
  for (let t in e) if (typeof e[t] == "object" && e[t] !== null) y(e[t], [...r, t], [...n, Object.prototype.hasOwnProperty.call(e[t], "index") ? e[t].index : t], o);
  else {
    let l = "/" + r.join("/"), i = "/" + n.join("/");
    t === "index" ? (o[l] = i, l += "/" + t, i += "/" + t, o[l] = i) : (l += "/" + t, i += "/" + e[t], o[l] = i);
  }
  return o;
};
var m = (e, r) => {
  if (e === "/") return e;
  switch (r) {
    case "always":
      return e.endsWith("/") ? e : e + "/";
    case "never":
      return e.replace(/\/$/, "");
    default:
      return e;
  }
}, P = (e = "/", r = null, n = "/") => {
  r || (r = i18next.language);
  let s = e.split("/").filter((f) => f !== ""), o = n.split("/").filter((f) => f !== "");
  JSON.stringify(s).startsWith(JSON.stringify(o).replace(/]+$/, "")) && s.splice(0, o.length), e = s.length === 0 ? "" : s.join("/"), n = o.length === 0 ? "/" : "/" + o.join("/") + "/";
  let { flatRoutes: t, showDefaultLocale: l, defaultLocale: i, locales: a, trailingSlash: c } = g.config;
  if (!a.includes(r)) return console.warn(`WARNING(astro-i18next): "${r}" locale is not supported, add it to the locales in your astro config.`), m(`${n}${e}`, c);
  if (s.length === 0) return m(l ? `${n}${r}` : r === i ? n : `${n}${r}`, c);
  if (r === i) {
    let f = Object.keys(t).find((d) => t[d] === "/" + e);
    typeof f < "u" && (s = f.split("/").filter((d) => d !== ""));
  }
  for (let f of a) if (s[0] === f) {
    s.shift();
    break;
  }
  (l || r !== i) && (s = [r, ...s]);
  let u = n + s.join("/");
  return Object.prototype.hasOwnProperty.call(t, u.replace(/\/$/, "")) ? m(t[u.replace(/\/$/, "")], c) : m(u, c);
};
function fe(e) {
  A(e);
}

i18next.use(fsBackend).init({"supportedLngs": ["es","en",],"fallbackLng": ["es","en",],"ns": ["translation",],"defaultNS": "translation","initImmediate": false,"backend": {"loadPath": "/Users/geovanydev/dev/heyfrwrd-landing/public/locales/{{lng}}/{{ns}}.json",},"debug": true,"preload": ["es","en",],"load": "all","returnEmptyString": false,"returnNull": false,"returnObjects": false,"saveMissing": false,});fe({"defaultLocale": "es","locales": ["es","en",],"namespaces": ["translation",],"defaultNamespace": "translation","load": ["server","client",],"routes": {},"flatRoutes": {},"showDefaultLocale": false,"trailingSlash": "ignore","resourcesBasePath": "/locales","detectLocale": {"order": ["path","cookie","localStorage","navigator",],"caches": ["cookie","localStorage",],},"fallbackLocales": {"default": ["es","en",],},"debug": true,"i18nextServer": {"debug": true,"initImmediate": false,"preload": ["es","en",],"supportedLngs": ["es","en",],"load": "all","returnEmptyString": false,"returnNull": false,"returnObjects": false,"saveMissing": false,},"i18nextClient": {"debug": true,},});

const translations = {
  en: {
    "request.stepCounter": "Step {{current}} of {{total}}",
    "input.requestAccess": "Request early access!",
    "input.submit": "Request",
    "input.placeholder": "@your_instagram",
    "request.step1Title": "We'd love to learn more about you!",
    "request.step1Subtitle": "We want to tailor to your needs!",
    "request.step2Title": "What's your biggest challenge?",
    "request.step2Subtitle": "Let's identify the main problem to solve.",
    "request.step3Title": "How much engagement do you get?",
    "request.step3Subtitle": "Understanding your interaction volume.",
    "request.step4Title": "How interested are you in automation?",
    "request.step4Subtitle": "Gauge your interest in this solution.",
    "request.step5Title": "Let's stay in touch!",
    "request.step5Subtitle": "We'll send you early access when it's ready—keep an eye on your DMs!",
    "request.back": "Back",
    "request.next": "Next",
    "request.submit": "Submit",
    "request.sending": "Sending...",
    "request.creatorTypeLabel": "What type of creator are you?",
    "request.influencer": "Influencer",
    "request.influencerSub": "Personal blog, lifestyle…",
    "request.coach": "Coach/Mentor",
    "request.coachSub": "Business, fitness…",
    "request.entrepreneur": "Entrepreneur",
    "request.entrepreneurSub": "Products/services",
    "request.followersCountLabel": "How many followers do you have?",
    "request.platformLabel": "What's your main platform?",
    "request.challengeLabel": "What's your biggest challenge with DMs?",
    "request.timeChallenge": "Lack of time",
    "request.timeChallengeSub": "I can't reply to everything",
    "request.repetitiveInfo": "Repetitive info",
    "request.repetitiveInfoSub": "Always the same questions",
    "request.timeDMsLabel": "How much time do you spend on DMs daily?",
    "request.dailyInteractionsLabel": "How many daily interactions do you receive?",
    "request.missedOpportunitiesLabel": "How often do you miss opportunities?",
    "request.paymentWillingnessLabel": "How much would you pay monthly for this solution?",
    "request.automationInterestLabel": "How interested are you in AI that auto-captures data?",
    "request.veryInterested": "Very interested",
    "request.veryInterestedSub": "I need it now",
    "request.interested": "Interested",
    "request.interestedSub": "I'd like to try it",
    "request.notInterested": "Not interested",
    "request.notInterestedSub": "Maybe later",
    "request.nameLabel": "Name",
    "request.namePlaceholder": "Your full name",
    "request.emailLabel": "Email",
    "request.emailPlaceholder": "you@example.com",
    "request.instagramLabel": "Instagram account",
    "request.instagramPlaceholder": "@yourhandle",
    "request.successMessage": "We've received your info. We'll reach out soon with early access to heyfrwrd.me",
    "request.followUs": "Follow us on",
    "request.forMoreUpdates": "for more updates",
    "request.thankYou": "Thank you for your time!",
    "request.rarely": "Rarely",
    "request.rarelyFreq": "1-2 times/month",
    "request.often": "Often",
    "request.oftenFreq": "Several times/week",
    "request.constantly": "Constantly",
    "request.constantlyFreq": "Every day",
    "request.lowPriceRange": "approx. $8-20 USD",
    "request.midPriceRange": "approx. $30-100 USD",
    "request.highPriceRange": "approx. $100+ USD"
  },
  es: {
    "request.stepCounter": "Paso {{current}} de {{total}}",
    "input.requestAccess": "¡Solicita acceso anticipado!",
    "input.submit": "Solicitar",
    "input.placeholder": "@tuusuario",
    "request.step1Title": "¡Nos encantaría saber más sobre ti!",
    "request.step1Subtitle": "¡Queremos adaptarnos a tus necesidades!",
    "request.step2Title": "¿Cuál es tu mayor desafío?",
    "request.step2Subtitle": "Identifiquemos el principal problema a resolver.",
    "request.step3Title": "¿Cuánto engagement recibes?",
    "request.step3Subtitle": "Es importante entender el volumen de interacciones.",
    "request.step4Title": "¿Qué tan interesado estás en la automatización?",
    "request.step4Subtitle": "Evalúa tu interés en esta solución.",
    "request.step5Title": "¡Nos mantendremos en contacto contigo!",
    "request.step5Subtitle": "Te enviaremos acceso anticipado cuando esté listo. Atento a tus DMs!",
    "request.back": "Atrás",
    "request.next": "Siguiente",
    "request.submit": "Enviar",
    "request.sending": "Enviando...",
    "request.creatorTypeLabel": "¿Qué tipo de creador eres?",
    "request.influencer": "Influencer",
    "request.influencerSub": "Blog personal, estilo de vida…",
    "request.coach": "Coach/Mentor",
    "request.coachSub": "Negocios, fitness…",
    "request.entrepreneur": "Emprendedor",
    "request.entrepreneurSub": "Productos/servicios",
    "request.followersCountLabel": "¿Cuántos seguidores tienes?",
    "request.platformLabel": "¿Cuál es tu plataforma principal?",
    "request.challengeLabel": "¿Cuál es tu mayor desafío con los DMs?",
    "request.timeChallenge": "Falta de tiempo",
    "request.timeChallengeSub": "No alcanzo a responder todo",
    "request.repetitiveInfo": "Información repetitiva",
    "request.repetitiveInfoSub": "Siempre las mismas preguntas",
    "request.timeDMsLabel": "¿Cuánto tiempo dedicas a DMs diario?",
    "request.dailyInteractionsLabel": "¿Cuántas interacciones diarias recibes?",
    "request.missedOpportunitiesLabel": "¿Con qué frecuencia sientes que pierdes oportunidades?",
    "request.paymentWillingnessLabel": "¿Cuánto pagarías al mes por esta solución?",
    "request.automationInterestLabel": "¿Qué tan interesado estás en una IA que capture datos automáticamente?",
    "request.veryInterested": "Muy interesado",
    "request.veryInterestedSub": "Lo necesito ya",
    "request.interested": "Interesado",
    "request.interestedSub": "Me gustaría probarlo",
    "request.notInterested": "Poco interesado",
    "request.notInterestedSub": "Tal vez luego",
    "request.nameLabel": "Nombre",
    "request.namePlaceholder": "Tu nombre completo",
    "request.emailLabel": "Email",
    "request.emailPlaceholder": "tu@email.com",
    "request.instagramLabel": "Cuenta de Instagram",
    "request.instagramPlaceholder": "@tuusuario",
    "request.successMessage": "Hemos recibido tu información. Te contactaremos pronto con acceso anticipado a heyfrwrd.me",
    "request.followUs": "Síguenos en",
    "request.forMoreUpdates": "para más actualizaciones",
    "request.thankYou": "¡Agradecemos tu tiempo!",
    "request.rarely": "Raramente",
    "request.rarelyFreq": "1-2 veces/mes",
    "request.often": "A menudo",
    "request.oftenFreq": "Varias veces/semana",
    "request.constantly": "Constantemente",
    "request.constantlyFreq": "Todos los días",
    "request.lowPriceRange": "aprox. 208–521 HNL",
    "request.midPriceRange": "aprox. 781–2,614.99 HNL",
    "request.highPriceRange": "aprox. 2,614.99+ HNL"
  }
};
function getTranslation(key, language, params) {
  let text = translations[language][key] || key;
  if (params) {
    Object.entries(params).forEach(([paramKey, paramValue]) => {
      text = text.replace(new RegExp(`{{${paramKey}}}`, "g"), String(paramValue));
    });
  }
  return text;
}
function getCurrentLanguage() {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    if (path.startsWith("/en/") || path.startsWith("/en")) {
      return "en";
    }
    if (path.startsWith("/es/") || path.startsWith("/es")) {
      return "es";
    }
    const browserLang = getBrowserLanguage();
    if (browserLang) {
      return browserLang;
    }
  }
  return "es";
}
function getLanguagePrefix(language = "es") {
  return language === "en" ? "/en" : "/es";
}
function getBrowserLanguage() {
  if (typeof window === "undefined" || !window.navigator) {
    return null;
  }
  const browserLang = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage;
  if (!browserLang) {
    return null;
  }
  if (browserLang.toLowerCase().startsWith("en")) {
    return "en";
  }
  if (browserLang.toLowerCase().startsWith("es")) {
    return "es";
  }
  return null;
}

/** @type {import('astro-i18next').AstroI18nextConfig} */
const config = {
  locales: ["es", "en"]};

const $$Astro$2 = createAstro("https://heyfrwrd.me/");
const $$HeadHrefLangs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeadHrefLangs;
  const { locales } = config;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${locales.map((locale) => renderTemplate`<link rel="alternate"${addAttribute(locale, "hreflang")}${addAttribute(new URL(
    P(currentPath, locale),
    Astro2.url.origin
  ).toString(), "href")}>`)}`;
}, "/Users/geovanydev/dev/heyfrwrd-landing/src/components/HeadHrefLangs.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.DW2Rz0OW.png","width":625,"height":594,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/geovanydev/dev/heyfrwrd-landing/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const currentLanguage = i18next.language || "es";
  const langPrefix = currentLanguage === "en" ? "/en" : "/es";
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center px-6 py-2 w-full rounded-4xl"> <a class="flex items-center gap-3"${addAttribute(langPrefix + "/", "href")}> <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "heyfrwrd logo", "class": "w-8 h-8" })} </div> <span class="text-2xl font-bold text-gray-900 tracking-tight">
heyfrwrd
</span> </a> </header>`;
}, "/Users/geovanydev/dev/heyfrwrd-landing/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://heyfrwrd.me/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/geovanydev/dev/heyfrwrd-landing/node_modules/.pnpm/@vercel+speed-insights@1.2.0_react@19.1.0/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/geovanydev/dev/heyfrwrd-landing/node_modules/.pnpm/@vercel+speed-insights@1.2.0_react@19.1.0/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://heyfrwrd.me/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentLocale = Astro2.currentLocale || "en";
  const SITE = "https://heyfrwrd.me";
  const path = Astro2.url.pathname;
  let SITE_URL = SITE;
  if (SITE_URL.endsWith("/")) {
    SITE_URL = SITE_URL.slice(0, -1);
  }
  const canonicalUrl = SITE_URL + path;
  const ogImageUrl = SITE_URL + "/og.webp";
  const faviconUrl = SITE_URL + "/favicon.svg";
  const siteTitle = "heyfrwrd.me";
  const siteDescription = "Automate your social media DMs with AI that responds just like you.";
  const organizationId = SITE_URL + "#organization";
  const websiteId = SITE_URL + "#website";
  const jsonLdObj = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteTitle,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: faviconUrl,
          width: "512",
          height: "512"
        },
        description: siteDescription,
        sameAs: [
          "https://twitter.com/heyfrwrdme",
          "https://instagram.com/heyfrwrdme"
        ]
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: siteTitle,
        description: siteDescription,
        publisher: {
          "@id": organizationId
        },
        inLanguage: currentLocale
      },
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: siteTitle,
        isPartOf: {
          "@id": websiteId
        },
        about: {
          "@id": organizationId
        },
        description: siteDescription,
        inLanguage: currentLocale
      }
    ]
  };
  const jsonLdString = JSON.stringify(jsonLdObj);
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="index, follow"><!-- Canonical --><link rel="canonical"', "><!-- Alternates -->", "<title>", '</title><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale"', '><meta property="og:site_name" content="heyfrwrd.me"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@heyfrwrdme"><meta name="twitter:creator" content="@heyfrwrdme"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Self-hosted Outfit font --><link rel="preload" href="/fonts/Outfit-VariableFont_wght.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/fonts/outfit.css"><!-- Schema.org JSON-LD --><script type="application/ld+json">', "</script>", '</head> <body class="max-h-screen m-0 w-full"> ', " ", " ", " </body></html>"])), addAttribute(currentLocale, "lang"), addAttribute(canonicalUrl, "href"), renderComponent($$result, "HeadHrefLangs", $$HeadHrefLangs, {}), siteTitle, addAttribute(siteDescription, "content"), addAttribute(canonicalUrl, "content"), addAttribute(siteTitle, "content"), addAttribute(siteDescription, "content"), addAttribute(ogImageUrl, "content"), addAttribute(currentLocale === "es" ? "es_ES" : "en_US", "content"), addAttribute(canonicalUrl, "content"), addAttribute(siteTitle, "content"), addAttribute(siteDescription, "content"), addAttribute(ogImageUrl, "content"), unescapeHTML(jsonLdString), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "SpeedInsights", $$Index, {}));
}, "/Users/geovanydev/dev/heyfrwrd-landing/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getTranslation as a, getLanguagePrefix as b, getCurrentLanguage as g };
