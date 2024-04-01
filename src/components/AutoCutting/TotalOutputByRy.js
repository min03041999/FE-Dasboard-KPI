import React from "react";
import Card from "../Card";
import Title from "../Title";
import DataTable from "../DataTable";
import {
  GET_MATERIAL_DONE,
  GET_MATERIAL_ON_GOING,
  HEADER_TOTAL_OUTPUT_BY_RY,
} from "../../data";
import { Box, Grid } from "@mui/material";

const DATA_GET_MATERIAL_ON_GOING = GET_MATERIAL_ON_GOING.map((data) => {
  return {
    RY: data.RY,
    ARTICLE: data.ARTICLE,
    Model: data.Model,
    LEAN: data.LEAN,
    prodate: data.prodate,
    Plan_qty: data.Plan_qty,
    Actual_qty: data.Actual_qty,
    TotalComp: data.TotalComp,
    ongoing: data.ongoing,
  };
});

const DATA_GET_MATERIAL_DONE = GET_MATERIAL_DONE.map((data) => {
  return {
    RY: data.RY,
    ARTICLE: data.ARTICLE,
    Model: data.Model,
    LEAN: data.LEAN,
    prodate: data.prodate,
    Plan_qty: data.Plan_qty,
    Actual_qty: data.Actual_qty,
    TotalComp: data.TotalComp,
    ongoing: data.ongoing,
  };
});

const TotalOutputByRy = (props) => {
  const { customStyle, header } = props;

  return (
    <Card customStyle={customStyle}>
      <Title name={header} />
      <Box height={"47%"} paddingBottom={1}>
        <DataTable
          header={HEADER_TOTAL_OUTPUT_BY_RY}
          data={DATA_GET_MATERIAL_ON_GOING}
          customTableHeadStyle={{ bgcolor: "#337ab7", color: "#fff" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </Box>
      <Box height={"46%"}>
        <DataTable
          header={HEADER_TOTAL_OUTPUT_BY_RY}
          data={DATA_GET_MATERIAL_DONE}
          customTableHeadStyle={{ bgcolor: "#337ab7", color: "#fff" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </Box>
    </Card>
  );
};

export default TotalOutputByRy;
