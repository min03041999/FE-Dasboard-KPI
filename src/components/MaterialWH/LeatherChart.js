import React from "react";
import PieSimple from "../PieSimple";

export default function LeatherChart({ setHeightChart, leatherChart }) {
  return <PieSimple data={leatherChart} setHeightChart={setHeightChart} />;
}
