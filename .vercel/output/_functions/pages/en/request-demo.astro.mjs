import { $ as $$Layout } from '../../chunks/Layout_v6pAYfX1.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Bj0t9SUF.mjs';
import { changeLanguage } from 'i18next';
import { M as MultiStepForm } from '../../chunks/MultiStepForm_xcoXr56_.mjs';
export { renderers } from '../../renderers.mjs';

const $$RequestDemo = createComponent(($$result, $$props, $$slots) => {
  changeLanguage("en");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MultiStepForm", MultiStepForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MultiStepForm", "client:component-export": "default" })} ` })}`;
}, "/Users/geovanydev/dev/heyfrwrd-landing/src/pages/en/request-demo.astro", void 0);

const $$file = "/Users/geovanydev/dev/heyfrwrd-landing/src/pages/en/request-demo.astro";
const $$url = "/en/request-demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RequestDemo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
