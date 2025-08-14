"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Section.module.css";

export function Section({
  as: _Component = _Builtin.DOM,
  colorMode = "Base",
  slotContent,
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  const _styleVariantMap = {
    Base: "",
    Invert: "w-variant-ffdae436-6d76-12b6-39d6-0e4201c47aad",
    "Accent 1": "w-variant-8251da35-d56b-3ffb-d48d-7c7a41627606",
    "Accent 2": "w-variant-24d38caf-5dc4-e032-8615-f1b8b9543543",
  };

  const _activeStyleVariant = _styleVariantMap[colorMode];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "section",
        "cc-themed",
        _activeStyleVariant
      )}
      tag="section"
      class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.NotSupported _atom="Slot" />
      </_Builtin.Block>
    </_Component>
  );
}
