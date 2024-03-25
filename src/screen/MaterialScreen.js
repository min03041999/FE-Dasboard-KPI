import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box, Grid } from "@mui/material";
import Card from "../components/Card";
import Title from "../components/Title";
import {
  HEADER_DAILY_INSPECTION_REPORT,
  HEADER_MATERIAL_WH_ESCALATION,
  HEADER_N761,
  HEADER_N762,
  LEATHER_SUMMARY,
  TOP3_N761,
  TOP3_N762,
} from "../data";
import TabTable from "../components/TabTable";
import DefectTable from "../components/DefectTable";
import DataTable from "../components/DataTable";

const MaterialScreen = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const SET_FULL_SCREEN_LAPTOP =
    screenHeight > 730
      ? { height: `${screenHeight / 3.3}px` }
      : { height: "300px" };

  return (
    <Box component={"div"} className="material-screen">
      <Box
        component={"div"}
        sx={
          screenHeight > 730 && screenHeight < 780
            ? { height: `${screenHeight / 10}px` }
            : {}
        }
      >
        <Breadcrumb>Material W/H</Breadcrumb>
      </Box>
      <Box
        component={"div"}
        className="material-screen-body"
        sx={{ flexGrow: 1 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ height: SET_FULL_SCREEN_LAPTOP }}>
            <Card>
              <DefectTable header={HEADER_N762} data={TOP3_N762} />
            </Card>
          </Grid>
          <Grid item xs={6} sx={{ height: SET_FULL_SCREEN_LAPTOP }}>
            <Card>
              <DefectTable header={HEADER_N761} data={TOP3_N761} />
            </Card>
          </Grid>
          <Grid item xs={6} sx={{ height: SET_FULL_SCREEN_LAPTOP }}>
            <Card>
              <Title name="SS24 MATERIAL CHECK STATUS" />
            </Card>
          </Grid>
          <Grid item xs={6} sx={{ height: SET_FULL_SCREEN_LAPTOP }}>
            <Card>
              <Title name="MATERIAL W/H ESCALATION" />
              <DataTable header={HEADER_MATERIAL_WH_ESCALATION} height="93%" />
            </Card>
          </Grid>
          <Grid item xs={6} sx={{ height: SET_FULL_SCREEN_LAPTOP }}>
            <Card>
              <Title name="DAILY INSPECTION REPORT" />
              <DataTable
                header={HEADER_DAILY_INSPECTION_REPORT}
                data={LEATHER_SUMMARY}
                height="93%"
              />
            </Card>
          </Grid>
          <Grid item xs={6} sx={{ height: SET_FULL_SCREEN_LAPTOP }}>
            <Card>
              <Title name="DAILY KANBAN STATUS" />
              <TabTable />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MaterialScreen;
