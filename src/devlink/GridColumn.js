"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GridColumn.module.css";

export function GridColumn({
  as: _Component = _Builtin.DOM,
  columnSize = "Fill",
  slotContent,
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  const _styleVariantMap = {
    Fill: "",
    Shrink: "w-variant-63569d8e-a8ac-61e1-0666-21eb6073c541",
    "2/12": "w-variant-28e74f51-d7e2-a771-32c6-dda728ccfa16",
    "3/12": "w-variant-37882ba8-3b46-b8b4-f297-a33f19abd3db",
    "4/12": "w-variant-2a872dd3-bab5-8141-0ad7-251b924e42e6",
    "5/12": "w-variant-1809bbfe-93c5-9995-a76f-dc2c5b37bfe3",
    "6/12": "w-variant-52b169ce-f9c2-1128-cb8d-e5acee9f9159",
    "7/12": "w-variant-d2d2a23d-14a1-7f5e-e8ec-4a285e5f4a7b",
    "8/12": "w-variant-c40c2b54-bd7f-c6df-c4ad-1c9f757a89d2",
    "9/12": "w-variant-f8adaa2d-7dff-f490-b6dd-19f48419d59b",
    "10/12": "w-variant-95c67bf8-407f-143d-c1b2-46906c26a2f4",
    "11/12": "w-variant-6f373193-993b-d370-7068-a233ac19befc",
    "12/12": "w-variant-c2470e99-215a-e78c-3ec0-c579f938e15e",
  };

  const _activeStyleVariant = _styleVariantMap[columnSize];

  return (
    <_Component
      className={_utils.cx(_styles, "col", _activeStyleVariant)}
      tag="div"
      class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    >
      <_Builtin.NotSupported _atom="Slot" />
    </_Component>
  );
}
