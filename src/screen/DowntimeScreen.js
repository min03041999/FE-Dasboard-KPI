import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Navigation from "../components/Navigation";
import { FACTORY } from "../utils/env";
import Card from "../components/Card";
import TotalChartByDowntime from "../components/Downtime/TotalChartByDowntime";
import TotalDowntimeByReason from "../components/Downtime/TotalDowntimeByReason";
import MechanicRepairingTime from "../components/Downtime/MechanicRepairingTime";
import MechanicList from "../components/Downtime/MechanicList";

const DowntimeScreen = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [navigate, setNavigate] = useState({
    factory: FACTORY,
    floor: "",
    line: "",
    section: "",
  });

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
      ? { height: `${screenHeight / 3}px` }
      : { height: "300px" };
  const SET_HEIGHT_CHART =
    screenHeight > 730 ? screenHeight / 3 - 90 : 300 - 90;
  return (
    <Box component={"div"} className="downtime-screen">
      <Box
        component={"div"}
        sx={
          screenHeight > 730 && screenHeight < 780
            ? { position: "relative", height: `${screenHeight / 3}px` }
            : { position: "relative", height: "100%" }
        }
      >
        <Breadcrumb>Downtime Dashboard</Breadcrumb>
        <Navigation navigate={navigate} setNavigate={setNavigate} />
      </Box>
      <Box
        component={"div"}
        className="downtime-screen-body"
        sx={{ flexGrow: 1 }}
      >
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={3}>
            <TotalChartByDowntime
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={"TOTAL BREAKDOWN BY MACHINE (times)"}
              setHeightChart={SET_HEIGHT_CHART}
            />
          </Grid>
          <Grid item xs={3}>
            <TotalChartByDowntime
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={"TOTAL DOWNTIME BY MACHINE (minutes)"}
              setHeightChart={SET_HEIGHT_CHART}
            />
          </Grid>
          <Grid item xs={6}>
            <Card customStyle={SET_FULL_SCREEN_LAPTOP}></Card>
          </Grid>
          <Grid item xs={3}>
            <TotalDowntimeByReason
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={"TOTAL DOWNTIME BY MACHINE (minutes)"}
              setHeightChart={SET_HEIGHT_CHART}
            />
          </Grid>
          <Grid item xs={5}>
            <MechanicRepairingTime
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={"MECHANIC REPAIRING TIME (minutes)"}
            />
          </Grid>
          <Grid item xs={4}>
            <MechanicList
              customStyle={SET_FULL_SCREEN_LAPTOP}
              header={"MECHANIC LIST"}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DowntimeScreen;
