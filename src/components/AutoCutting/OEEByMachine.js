import React from "react";
import Card from "../Card";
import Title from "../Title";
import { Grid } from "@mui/material";
import DataTable from "../DataTable";
import { HEADER_OEE_BY_MACHINE, OEE_BY_MACHINE } from "../../data";

const OEEByMachine = (props) => {
  const { customStyle, header, autoCuttingData = [] } = props;
  const setHeightTable = {
    ...customStyle,
    height: parseFloat(parseInt(customStyle.height, 10) - 40),
  };
  const DATA_OEE_BY_MACHINE = autoCuttingData.map((data) => {
    return {
      Layer: data.Layer,
      Operating: data.Operating,
      TotalDowntime: data.TotalDowntime,
      AvailableTime: data.AvailableTime,
      AvailabilityFactor: `${(data.AvailabilityFactor * 100).toFixed(1)}%`,
      TheoreticalOutput: data.TheoreticalOutput,
      ActualOutput: data.ActualOutput,
      PerformanceFactor: `${(data.PerformanceFactor * 100).toFixed(1)}%`,
      DefectiveProduct: data.DefectiveProduct,
      OEE: `${(data.OEE * 100).toFixed(1)}%`,
    };
  });
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
            customTableHeadStyle={{
              bgcolor: "#337ab7",
              color: "#fff",
              textAlign: "center",
            }}
            alignText="center"
            customTextStyle={{ whiteSpace: "nowrap", fontSize: "11px" }}
            height={setHeightTable}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default OEEByMachine;
