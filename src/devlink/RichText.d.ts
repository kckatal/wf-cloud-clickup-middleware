import * as React from "react";
import * as Types from "./types";

declare function RichText(props: {
  as?: React.ElementType;
  alignment?: "Left Align" | "Center Align";
  content?: Types.Basic.RichTextChildren;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Basic.IdTextInput;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
