import type { Comp, EaseFunc, KEventController, LerpValue } from "../../types";
type AnimateEndBehavior = "loop" | "ping-pong" | "stop";
type Interpolation = "linear" | "spline";
export interface AnimateOpt {
    /**
     * Duration of the animation in seconds
     */
    duration: number;
    /**
     * Behavior when reaching the end of the animation. Default is stop.
     */
    endBehavior?: AnimateEndBehavior;
    /**
     * Easing function. Default is linear time.
     */
    easing?: EaseFunc;
    /**
     * Interpolation function. Default is linear interpolation.
     */
    interpolation?: Interpolation;
    /**
     * Timestamps in percent for the given keys, if omitted, keys are equally spaced.
     */
    timing?: number[];
    /**
     * Easings for the given keys, if omitted, easing is used.
     */
    easings?: EaseFunc[];
}
export interface AnimateComp extends Comp {
    /**
     * Animates a property on this object.
     * @param name Name of the property to animate.
     * @param keys Keys determining the value at a certain point in time.
     * @param opts Options.
     */
    animate<T extends LerpValue>(name: string, keys: T[], opts: AnimateOpt): void;
    /**
     * Removes the animation from the given property.
     * @param name Name of the property to remove the animation from.
     */
    unanimate(name: string): void;
    /**
     * Removes the animations from all properties
     */
    unanimateAll(): void;
    /**
     * Attaches an event handler which is called when all the animation channels have finished.
     * @param cb The event handler called when the animation finishes.
     */
    onAnimateFinished(cb: () => void): KEventController;
    /**
     * Attaches an event handler which is called when an animation channels has finished.
     * @param cb The event handler called when an animation channel finishes.
     */
    onAnimateChannelFinished(cb: (name: string) => void): KEventController;
}
export declare function animate(): AnimateComp;
export {};
//# sourceMappingURL=animate.d.ts.map