import type { Comp } from "../../types";
/**
 * The {@link stay `stay()`} component.
 *
 * @group Component Types
 */
export interface TextInputComp extends Comp {
    /**
     * Enable the text input array from being modified by user input.
     */
    hasFocus: boolean;
}
export declare function textInput(hasFocus?: boolean, maxInputLength?: number): TextInputComp;
//# sourceMappingURL=textInput.d.ts.map