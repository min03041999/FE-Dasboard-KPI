import React from "react";
import Card from "../Card";
import Title from "../Title";
import { Grid } from "@mui/material";
import DataTable from "../DataTable";
import { HEADER_OEE_BY_MACHINE, OEE_BY_MACHINE } from "../../data";

const DATA_OEE_BY_MACHINE = OEE_BY_MACHINE.map((data) => {
  return {
    Layer: data.Layer,
    Operating: data.Operating,
    TotalDowntime: data.TotalDowntime,
    AvailableTime: data.AvailableTime,
    AvailabilityFactor: data.AvailabilityFactor,
    TheoreticalOutput: data.TheoreticalOutput,
    ActualOutput: data.ActualOutput,
    PerformanceFactor: data.PerformanceFactor,
    DefectiveProduct: data.DefectiveProduct,
    OEE: data.OEE,
  };
});

const arr = [];

OEE_BY_MACHINE.map((item) => {
  arr.push(item.AvailabilityFactor);
});

const result = arr.reduce((total, curr) => total + curr, 0);

console.log(result);

const OEEByMachine = (props) => {
  const { customStyle, header } = props;

  return (
    <Card customStyle={customStyle}>
      <Grid container height={"100%"}>
        <Grid item xs={12}>
          <Title name={header} />
        </Grid>
        <Grid item xs={12} height={"95%"}>
          <DataTable
            header={HEADER_OEE_BY_MACHINE}
            data={DATA_OEE_BY_MACHINE}
            customTableHeadStyle={{ bgcolor: "#337ab7", color: "#fff" }}
            customTextStyle={{ whiteSpace: "nowrap" }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default OEEByMachine;
