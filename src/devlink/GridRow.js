"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GridRow.module.css";

export function GridRow({
  as: _Component = _Builtin.DOM,
  columnAlignment = "Top Left",
  slotContent,
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  const _styleVariantMap = {
    "Top Left": "",
    "Top Right": "w-variant-b304d51f-8499-8e80-0632-b7e8accf301a",
    "Top Center": "w-variant-478364d0-b9a1-9a8d-3561-fc2372ac7598",
    "Top Between": "w-variant-5d43bd90-6372-654d-731d-541adec41264",
    "Center Left": "w-variant-74857e04-b06e-e825-b9a7-b1c429c16d7e",
    "Center Right": "w-variant-84c0d3ac-e67c-aa17-8572-49b2e539ff14",
    "Center Center": "w-variant-83b17255-59f7-790b-da69-1e44aab5c586",
    "Center Between": "w-variant-d8cdc2fb-aedc-5d05-72c6-68fd71715228",
    "Bottom Left": "w-variant-3d1b8c14-9e99-f9f9-47c1-87e724473bc0",
    "Bottom Right": "w-variant-30bc1b76-8350-656c-94d9-a238454cac88",
    "Bottom Center": "w-variant-17c26d76-ad6d-56cb-bed9-f93779ad31e8",
    "Bottom Between": "w-variant-c4e0622f-418c-65e4-f062-f3424e8d2467",
  };

  const _activeStyleVariant = _styleVariantMap[columnAlignment];
  return (
    <_Component tag="div" id={advancedId} style={advancedStyle}>
      <_Builtin.NotSupported _atom="Slot" />
    </_Component>
  );
}
