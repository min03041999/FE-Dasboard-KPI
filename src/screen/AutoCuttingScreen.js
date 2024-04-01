import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box, Grid } from "@mui/material";
import Card from "../components/Card";
import OverallOEE from "../components/AutoCutting/OverallOEE";
import OverallOEECard from "../components/AutoCutting/OverallOEECard";
import TotalDowntimeByMachine from "../components/AutoCutting/TotalDowntimeByMachine";
import DowntimeReason from "../components/AutoCutting/DowntimeReason";
import OEEByMachine from "../components/AutoCutting/OEEByMachine";
import TotalOutputByRy from "../components/AutoCutting/TotalOutputByRy";

const AutoCuttingScreen = () => {
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
      ? { height: `${screenHeight / 2 - 40}px` }
      : { height: "300px" };

  const SET_HEIGHT_CHART = screenHeight > 730 ? screenHeight / 3 - 16 : "85%";
  return (
    <Box component={"div"} className="autocutting-screen">
      <Box component={"div"}>
        <Breadcrumb>Auto Cutting</Breadcrumb>
      </Box>

      <Box
        component={"div"}
        className="autocutting-screen-body"
        sx={{ flexGrow: 1 }}
      >
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 2, sm: 2, md: 2, lg: 12 }}
            >
              <Grid item xs={2}>
                <OverallOEE
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"OVERALL OEE"}
                  setHeightChart={SET_HEIGHT_CHART}
                />
              </Grid>
              <Grid item xs={3}>
                <OverallOEECard customStyle={SET_FULL_SCREEN_LAPTOP} />
              </Grid>
              <Grid item xs={4}>
                <TotalDowntimeByMachine
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"TOTAL DOWNTIME BY MACHINE"}
                  setHeightChart={SET_HEIGHT_CHART}
                />
              </Grid>
              <Grid item xs={3}>
                <DowntimeReason
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"DOWNTIME REASON"}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 6, sm: 6, md: 6, lg: 12 }}
            >
              <Grid item xs={6}>
                <OEEByMachine
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"OEE BY MACHINE"}
                />
              </Grid>
              <Grid item xs={6}>
                <TotalOutputByRy
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"TOTAL OUTPUT BY RY"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AutoCuttingScreen;
