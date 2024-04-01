import { Box, Typography } from "@mui/material";
import React from "react";
import PieSimple from "../PieSimple";

const MAT_CHECK_CHART = [
  {
    name: "Inspection",
    fill: "#fc6e51",
    value: 24,
  },
  {
    name: "Pass",
    fill: "#a0d468",
    value: 20,
  },
  {
    name: "Fail",
    fill: "#fb4343",
    value: 0,
  },
  {
    name: "Waiting for lab",
    fill: "#ffce54",
    value: 8,
  },
];

export default function MatCheckChart({ setHeightChart }) {
  return <PieSimple data={MAT_CHECK_CHART} setHeightChart={setHeightChart} />;
}
