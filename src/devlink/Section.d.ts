import * as React from "react";
import * as Types from "./types";

declare function Section(props: {
  as?: React.ElementType;
  colorMode?: "Base" | "Invert" | "Accent 1" | "Accent 2";
  slotContent?: Types.Slots.SlotContent;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Basic.IdTextInput;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
