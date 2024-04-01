import { Box, Typography } from "@mui/material";
import React from "react";
import PieSimple from "../PieSimple";

const LEATHER_CHART = [
  {
    fill: "#fc6e51",
    name: "inspection",
    value: 0,
  },
  {
    fill: "#a0d468",
    name: "pass",
    value: 2,
  },
  {
    fill: "#fb4343",
    name: "fail",
    value: 0,
  },
];

export default function LeatherChart({ setHeightChart }) {
  return <PieSimple data={LEATHER_CHART} setHeightChart={setHeightChart} />;
}
