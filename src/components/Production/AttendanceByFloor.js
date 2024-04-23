import React from "react";
import Card from "../Card";
import Title from "../Title";
import { Stack, Box } from "@mui/material";

import ColumnLegendIcon from "../../icons/ColumnLegendIcon";

import ColumnGroup from "../../components/ColumnGroup";

const AttendanceByFloor = (props) => {
  const { customStyle, setHeightChart, header, data } = props; // data_1: line, data_2: value (VD: stitching), data_3: value (VD: assembly)
  return (
    <Card customStyle={customStyle}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Title name={header} />
        <Box
          component={"div"}
          sx={{ display: "flex", gap: "5px", alignItems: "center" }}
        >
          <ColumnLegendIcon name={"Stitching"} color={"#82adf9"} />
          <ColumnLegendIcon name={"Assembly"} color={"#8884d8"} />
        </Box>
      </Stack>

      <ColumnGroup setHeightChart={setHeightChart} data={data} />
    </Card>
  );
};

export default AttendanceByFloor;
