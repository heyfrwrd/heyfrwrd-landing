import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, b as createAstro, m as maybeRenderHead, e as addAttribute, g as renderSlot, r as renderComponent, F as Fragment } from './astro/server_Bj0t9SUF.mjs';
import { clsx } from 'clsx';
import i18next from 'i18next';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { g as getCurrentLanguage, a as getTranslation, b as getLanguagePrefix } from './Layout_v6pAYfX1.mjs';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
/* empty css                         */

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const background = createSvgComponent({"meta":{"src":"/_astro/background.BPKAcmfN.svg","width":1440,"height":1024,"format":"svg"},"attributes":{"width":"1440","height":"1024","fill":"none"},"children":"<path fill=\"url(#a)\" fill-rule=\"evenodd\" d=\"M-217.58 475.75c91.82-72.02 225.52-29.38 341.2-44.74C240 415.56 372.33 315.14 466.77 384.9c102.9 76.02 44.74 246.76 90.31 366.31 29.83 78.24 90.48 136.14 129.48 210.23 57.92 109.99 169.67 208.23 155.9 331.77-13.52 121.26-103.42 264.33-224.23 281.37-141.96 20.03-232.72-220.96-374.06-196.99-151.7 25.73-172.68 330.24-325.85 315.72-128.6-12.2-110.9-230.73-128.15-358.76-12.16-90.14 65.87-176.25 44.1-264.57-26.42-107.2-167.12-163.46-176.72-273.45-10.15-116.29 33.01-248.75 124.87-320.79Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><path fill=\"url(#b)\" fill-rule=\"evenodd\" d=\"M1103.43 115.43c146.42-19.45 275.33-155.84 413.5-103.59 188.09 71.13 409 212.64 407.06 413.88-1.94 201.25-259.28 278.6-414.96 405.96-130 106.35-240.24 294.39-405.6 265.3-163.7-28.8-161.93-274.12-284.34-386.66-134.95-124.06-436-101.46-445.82-284.6-9.68-180.38 247.41-246.3 413.54-316.9 101.01-42.93 207.83 21.06 316.62 6.61Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><defs><linearGradient id=\"b\" x1=\"373\" x2=\"1995.44\" y1=\"1100\" y2=\"118.03\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient><linearGradient id=\"a\" x1=\"107.37\" x2=\"1130.66\" y1=\"1993.35\" y2=\"1026.31\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#3245FF\" /><stop offset=\"1\" stop-color=\"#BC52EE\" /></linearGradient></defs>"});

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const $$Astro = createAstro("https://heyfrwrd.me/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/geovanydev/dev/heyfrwrd-landing/node_modules/.pnpm/@lucide+astro@0.515.0_astro@5.9.3_@types+node@24.0.1_jiti@2.4.2_lightningcss@1.30.1_rol_2a2f8be3153efdf61e55fd347c6baec3/node_modules/@lucide/astro/src/Icon.astro", void 0);

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const Github = createLucideIcon("github", [["path", { "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }], ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]]);

const Instagram = createLucideIcon("instagram", [["rect", { "width": "20", "height": "20", "x": "2", "y": "2", "rx": "5", "ry": "5" }], ["path", { "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }], ["line", { "x1": "17.5", "x2": "17.51", "y1": "6.5", "y2": "6.5" }]]);

const Linkedin = createLucideIcon("linkedin", [["path", { "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }], ["rect", { "width": "4", "height": "12", "x": "2", "y": "9" }], ["circle", { "cx": "4", "cy": "4", "r": "2" }]]);

const Mail = createLucideIcon("mail", [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }]]);

const Sparkles = createLucideIcon("sparkles", [["path", { "d": "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }], ["path", { "d": "M20 3v4" }], ["path", { "d": "M22 5h-4" }], ["path", { "d": "M4 17v2" }], ["path", { "d": "M5 18H3" }]]);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const InputButtonContext = React.createContext(void 0);
const useInputButton = () => {
  const context = React.useContext(InputButtonContext);
  if (!context) {
    throw new Error(
      "useInputButton must be used within an InputButtonProvider"
    );
  }
  return context;
};
function InputButtonProvider({
  className,
  transition = { type: "spring", stiffness: 300, damping: 20 },
  showInput,
  setShowInput,
  id,
  ...props
}) {
  const localId = React.useId();
  const [localShowInput, setLocalShowInput] = React.useState(false);
  return /* @__PURE__ */ jsx(
    InputButtonContext.Provider,
    {
      value: {
        showInput: showInput ?? localShowInput,
        setShowInput: setShowInput ?? setLocalShowInput,
        transition,
        id: id ?? localId
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          "data-slot": "input-button-provider",
          className: cn(
            "relative w-[250px] flex items-center justify-center h-12",
            (showInput || localShowInput) && "w-full max-w-[400px]",
            className
          ),
          ...props
        }
      )
    }
  );
}
function InputButton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      "data-slot": "input-button",
      className: cn("flex size-full", className),
      ...props
    }
  );
}
function InputButtonAction({ className, ...props }) {
  const { transition, setShowInput, id } = useInputButton();
  return /* @__PURE__ */ jsx(
    motion.button,
    {
      "data-slot": "input-button-action",
      className: cn(
        "bg-background text-sm whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring  focus-visible:ring-2  focus-visible:ring-black  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-full border text-background-foreground cursor-pointer pl-4 pr-12 size-full font-medium",
        className
      ),
      layoutId: `input-button-action-${id}`,
      transition,
      onClick: () => setShowInput((prev) => !prev),
      ...props
    }
  );
}
function InputButtonSubmit({
  className,
  children,
  icon: Icon = ArrowRight,
  ...props
}) {
  const { transition, showInput, setShowInput, id } = useInputButton();
  return /* @__PURE__ */ jsx(
    motion.button,
    {
      "data-slot": "input-button-submit",
      layoutId: `input-button-submit-${id}`,
      transition,
      "aria-label": "next-button",
      className: cn(
        "z-[1] [&_svg:not([class*='size-'])]:size-4 cursor-pointer disabled:pointer-events-none    disabled:cursor-not-allowed shrink-0 [&_svg]:shrink-0outline-none focus-visible:border-black focus-visible:ring-2 focus-visible:ring-black aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap bg-primary hover:bg-primary/90 transition-colors text-primary-foreground rounded-full text-sm flex items-center justify-center font-medium absolute inset-y-1 right-1",
        showInput ? "px-8" : "aspect-square",
        className
      ),
      onClick: () => setShowInput((prev) => !prev),
      ...props,
      children: showInput ? /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.2 },
          children
        },
        "show-button"
      ) : /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.2 },
          children: /* @__PURE__ */ jsx(Icon, { className: "size-4" })
        },
        "show-icon"
      )
    }
  );
}
function InputButtonInput({ className, ...props }) {
  const { transition, showInput, id } = useInputButton();
  return /* @__PURE__ */ jsx(AnimatePresence, { children: showInput && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 size-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      layoutId: `input-button-input-${id}`,
      className: "size-full flex items-center bg-background rounded-full relative",
      transition,
      children: /* @__PURE__ */ jsx(
        "input",
        {
          "data-slot": "input-button-input",
          className: cn(
            "size-full selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground inset-0 pl-4 focus:outline-none focus-visible:border-black focus-visible:ring-[1px] focus-visible:ring-black border focus-visible:ring-offset-0  pr-32 py-2 text-sm bg-background rounded-full absolute shrink-0 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive disabled:pointer-events-none disabled:cursor-not-allowed",
            className
          ),
          ...props
        }
      )
    }
  ) }) });
}

function InputIsland() {
  const [handle, setHandle] = React.useState("");
  const [language, setLanguage] = React.useState("es");
  const t = (key) => getTranslation(key, language);
  React.useEffect(() => {
    setLanguage(getCurrentLanguage());
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = handle.trim();
    if (!trimmed) return;
    window.sessionStorage.setItem("instagram_handle", trimmed);
    const langPrefix = getLanguagePrefix(language);
    window.location.href = `${langPrefix}/request-demo`;
  };
  return /* @__PURE__ */ jsx(
    "form",
    {
      onSubmit: handleSubmit,
      className: "min-w-[350px] w-full justify-center mx-auto flex items-center",
      children: /* @__PURE__ */ jsx(InputButtonProvider, { children: /* @__PURE__ */ jsxs(InputButton, { children: [
        /* @__PURE__ */ jsx(InputButtonAction, { children: t("input.requestAccess") }),
        /* @__PURE__ */ jsx(InputButtonSubmit, { type: "submit", disabled: !handle.trim(), children: t("input.submit") }),
        /* @__PURE__ */ jsx(
          InputButtonInput,
          {
            placeholder: t("input.placeholder"),
            value: handle,
            onChange: (e) => setHandle(e.target.value)
          }
        )
      ] }) })
    }
  );
}

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const social = [
    { Icon: Github, href: "https://github.com/heyfrwrd", label: "GitHub" },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/heyfrwrd/",
      label: "Instagram"
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/heyfrwrd/",
      label: "LinkedIn"
    },
    { Icon: Mail, href: "mailto:marlon.castro@heyfrwrd.me", label: "Email" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-3 p-2"> ${social.map(({ Icon, href, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(label, "aria-label")} class="group w-8 h-8 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/40 shadow-md overflow-hidden"> ${renderComponent($$result, "Icon", Icon, { "size": 18, "class": "text-gray-600 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:text-gray-800" })} </a>`)} </div>`;
}, "/Users/geovanydev/dev/heyfrwrd-landing/src/components/SocialIcons.astro", void 0);

const $$ComingSoon = createComponent(($$result, $$props, $$slots) => {
  Array.from({ length: 12 }).map(() => ({
    size: 12 + Math.random() * 24,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: (20 + Math.random() * 50).toFixed(0)
  }));
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden min-h-[500px]"> <div class="flex flex-col items-center justify-start px-10 text-center max-w-6xl mx-auto py-16"> <div class="fade-up" style="animation-delay: 0.2s;"> <div class="flex items-center gap-2 bg-transparent rounded-md p-2 border border-gray-700/20 mb-2 fade-up" style="animation-delay: 0.2s;"> ${renderComponent($$result, "Sparkles", Sparkles, { "size": 14, "class": "text-gray-700/20", "fill": "currentColor" })} <span class="text-gray-700 font-medium">${i18next.t("home.soon")}</span> </div> </div> <div class="fade-up" style="animation-delay: 0.4s;"> <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-none"> ${(() => {
    const headline = i18next.t("home.headline");
    const match = headline.match(/<0>(.+?)<\/0>/);
    if (match) {
      const firstPart = match[1];
      const restPart = headline.replace(/<0>.+?<\/0>/, "");
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="text-[#683fe7]">${firstPart}</span> ${restPart}` })}`;
    }
    return headline;
  })()} </h1> </div> <div class="fade-up" style="animation-delay: 0.6s;"> <p class="mt-8 text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed"> ${i18next.t("home.subtext")} </p> </div> <div class="fade-up" style="animation-delay: 0.8s; margin-bottom:2rem;"> ${renderComponent($$result, "InputIsland", InputIsland, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/InputIsland.tsx", "client:component-export": "default" })} </div> <div class="fade-up" style="animation-delay: 1s;"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, {})} </div> </div> </div>`;
}, "/Users/geovanydev/dev/heyfrwrd-landing/src/components/ComingSoon.astro", void 0);

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="container" class="h-full"> <img class="fixed top-0 left-0 w-full h-full -z-10 blur-2xl" id="background"${addAttribute(background.src, "src")} alt="" fetchpriority="high"> <main class="flex justify-center min-h-[calc(100vh-56px)]"> <section id="hero" class="flex items-center flex-col justify-center p-4"> ${renderComponent($$result, "ComingSoon", $$ComingSoon, {})} </section> </main> </div>`;
}, "/Users/geovanydev/dev/heyfrwrd-landing/src/components/Welcome.astro", void 0);

export { $$Welcome as $ };
