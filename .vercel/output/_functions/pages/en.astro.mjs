import { $ as $$Layout } from '../chunks/Layout_v6pAYfX1.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Bj0t9SUF.mjs';
import { changeLanguage } from 'i18next';
import { $ as $$Welcome } from '../chunks/Welcome_BG5IM5l7.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "/Users/geovanydev/dev/heyfrwrd-landing/src/pages/en/index.astro", void 0);

const $$file = "/Users/geovanydev/dev/heyfrwrd-landing/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
