import { Vec2 } from "./math";
import type { Anchor, ButtonsDef, KaboomCtx, KaboomOpt, MergePlugins, PluginList } from "./types";
export type * from "./types";
export declare function anchorPt(orig: Anchor | Vec2): Vec2;
export declare const isKaboomCtx: (obj: any) => obj is KaboomCtx;
export declare const getKaboomContext: (fallBack?: any) => KaboomCtx;
/**
 * Initialize KAPLAY context. The starting point of all KAPLAY games.
 *
 * @example
 * ```js
 * // Start KAPLAY with default options (will create a fullscreen canvas under <body>)
 * kaplay()
 *
 * // Init with some options
 * kaplay({
 *     width: 320,
 *     height: 240,
 *     font: "sans-serif",
 *     canvas: document.querySelector("#mycanvas"),
 *     background: [ 0, 0, 255, ],
 * })
 *
 * // All KAPLAY functions are imported to global after calling kaplay()
 * add()
 * onUpdate()
 * onKeyPress()
 * vec2()
 *
 * // If you want to prevent KAPLAY from importing all functions to global and use a context handle for all KAPLAY functions
 * const k = kaplay({ global: false })
 *
 * k.add(...)
 * k.onUpdate(...)
 * k.onKeyPress(...)
 * k.vec2(...)
 * ```
 *
 * @group Start
 */
declare const kaplay: <TPlugins extends PluginList<unknown> = [undefined], TButtons extends ButtonsDef = {}, TButtonsName extends string = keyof TButtons & string>(gopt?: KaboomOpt<TPlugins, TButtons>) => TPlugins extends [undefined] ? KaboomCtx<TButtons, TButtonsName> : KaboomCtx<TButtons, TButtonsName> & MergePlugins<TPlugins>;
export default kaplay;
//# sourceMappingURL=kaboom.d.ts.map