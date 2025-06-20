import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BUIBZVU-.mjs';
import { manifest } from './manifest_Bs5vxctS.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/survey.astro.mjs');
const _page2 = () => import('./pages/en/request-demo.astro.mjs');
const _page3 = () => import('./pages/en.astro.mjs');
const _page4 = () => import('./pages/es/request-demo.astro.mjs');
const _page5 = () => import('./pages/es.astro.mjs');
const _page6 = () => import('./pages/request-demo.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.9.3_@types+node@24.0.1_jiti@2.4.2_lightningcss@1.30.1_rollup@4.43.0_typescript@5.8.3_yaml@2.8.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/survey.ts", _page1],
    ["src/pages/en/request-demo.astro", _page2],
    ["src/pages/en/index.astro", _page3],
    ["src/pages/es/request-demo.astro", _page4],
    ["src/pages/es/index.astro", _page5],
    ["src/pages/request-demo.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "66f682af-70bc-4fed-b43e-c7f3bc9cfcbd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
