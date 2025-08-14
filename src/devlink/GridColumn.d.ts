import * as React from "react";
import * as Types from "./types";

declare function GridColumn(props: {
  as?: React.ElementType;
  columnSize?:
    | "Fill"
    | "Shrink"
    | "2/12"
    | "3/12"
    | "4/12"
    | "5/12"
    | "6/12"
    | "7/12"
    | "8/12"
    | "9/12"
    | "10/12"
    | "11/12"
    | "12/12";
  slotContent?: Types.Slots.SlotContent;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Basic.IdTextInput;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
