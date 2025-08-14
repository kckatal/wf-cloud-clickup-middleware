"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RichText.module.css";

export function RichText({
  as: _Component = _Builtin.DOM,
  alignment = "Left Align",
  content = "",
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  const _styleVariantMap = {
    "Left Align": "",
    "Center Align": "w-variant-1ef368e1-444e-70c3-fdb8-73a1a45e901c",
  };

  const _activeStyleVariant = _styleVariantMap[alignment];

  return (
    <_Component
      tag="div"
      class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    >
      <_Builtin.RichText
        className={_utils.cx(_styles, "rich-text", _activeStyleVariant)}
        tag="div"
        slot=""
      >
        {content}
      </_Builtin.RichText>
    </_Component>
  );
}
