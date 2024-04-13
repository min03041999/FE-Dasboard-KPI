import React from "react";
import PieSimple from "../PieSimple";

export default function MatCheckChart({ setHeightChart, matCheckChart }) {
  return <PieSimple data={matCheckChart} setHeightChart={setHeightChart} />;
}
