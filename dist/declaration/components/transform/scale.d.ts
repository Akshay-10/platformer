import { type Vec2, type Vec2Args } from "../../math";
import type { Comp } from "../../types";
/**
 * The {@link scale `scale()`} component.
 *
 * @group Component Types
 */
export interface ScaleComp extends Comp {
    scale: Vec2;
    scaleTo(s: number): void;
    scaleTo(s: Vec2): void;
    scaleTo(sx: number, sy: number): void;
    scaleBy(s: number): void;
    scaleBy(s: Vec2): void;
    scaleBy(sx: number, sy: number): void;
}
export declare function scale(...args: Vec2Args): ScaleComp;
//# sourceMappingURL=scale.d.ts.map