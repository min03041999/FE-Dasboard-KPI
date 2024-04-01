import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box, Button, Grid, Typography } from "@mui/material";
import Card from "../components/Card";
import Title from "../components/Title";
import {
  HEADER_MATERIAL_WH_ESCALATION,
  HEADER_N761,
  HEADER_N762,
  MATERIAL_WH_ESCALATION,
  TOP3_N761,
  TOP3_N762,
} from "../data";
import DefectTable from "../components/MaterialWH/DefectTable";
import DataTable from "../components/DataTable";
import {
  TabDailyInspectionReport,
  TabDailyKanbanStatus,
} from "../components/MaterialWH/TabTable";
import MatCheckChart from "../components/MaterialWH/MatCheckChart";
import LeatherChart from "../components/MaterialWH/LeatherChart";
import PieLegendIcon from "../icons/PieLegendIcon";
import TopDefectSupplier from "../components/MaterialWH/TopDefectSupplier";
import TopDefectSubcon from "../components/MaterialWH/TopDefectSubcon";
import MatCheckStatus from "../components/MaterialWH/MatCheckStatus";
import MatWHEscalation from "../components/MaterialWH/MatWHEscalation";
import DailyInspectionReport from "../components/MaterialWH/DailyInspectionReport";
import DailyKanbanStatus from "../components/MaterialWH/DailyKanbanStatus";

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
      ? { height: `${screenHeight / 3 - 50}px` }
      : { height: "300px" };

  const SET_HEIGHT_CHART =
    screenHeight > 730 ? screenHeight / 3 - 77 : 300 - 77;

  // console.log(screenHeight / 3);

  return (
    <Box component={"div"} className="material-screen">
      <Box
        component={"div"}
        sx={
          screenHeight > 730 && screenHeight < 780
            ? { position: "relative", height: `${screenHeight / 10}px` }
            : { position: "relative", height: "100%" }
        }
      >
        <Breadcrumb>Material W/H</Breadcrumb>
      </Box>
      <Box
        component={"div"}
        className="material-screen-body"
        sx={{ flexGrow: 1 }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 6, sm: 6, md: 6, lg: 12 }}
        >
          <Grid item xs={6}>
            <TopDefectSupplier
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={HEADER_N762}
              data={TOP3_N762}
            />
          </Grid>
          <Grid item xs={6}>
            <TopDefectSubcon
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={HEADER_N761}
              data={TOP3_N761}
            />
          </Grid>
          <Grid item xs={6}>
            <MatCheckStatus
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={"SS24 MATERIAL CHECK STATUS"}
              setHeightChart={SET_HEIGHT_CHART}
            />
          </Grid>
          <Grid item xs={6}>
            <MatWHEscalation
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={HEADER_MATERIAL_WH_ESCALATION}
              data={MATERIAL_WH_ESCALATION}
            />
          </Grid>
          <Grid item xs={6}>
            <DailyInspectionReport
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={"DAILY INSPECTION REPORT"}
            />
          </Grid>
          <Grid item xs={6}>
            <DailyKanbanStatus
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={"DAILY KANBAN STATUS"}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MaterialScreen;
