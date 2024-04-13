import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box, Grid } from "@mui/material";
import OverallOEE from "../components/AutoCutting/OverallOEE";
import OverallOEECard from "../components/AutoCutting/OverallOEECard";
import TotalDowntimeByMachine from "../components/AutoCutting/TotalDowntimeByMachine";
import DowntimeReason from "../components/AutoCutting/DowntimeReason";
import OEEByMachine from "../components/AutoCutting/OEEByMachine";
import TotalOutputByRy from "../components/AutoCutting/TotalOutputByRy";
import { autoCuttingApi } from "../api/AutoCutting/autoCuttingApi";
const AutoCuttingScreen = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [autoCuttingData, setAutoCuttingData] = useState([]);
  const [materialOnGoing, setMaterialOnGoing] = useState([]);
  const [materialDone, setMaterialDone] = useState([]);

  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const getAutoCutting = async () => {
      let res = await autoCuttingApi.getAutoCutting();
      setAutoCuttingData(res.data.data);
    };
    const getMaterialOnGoing = async () => {
      let res = await autoCuttingApi.getMaterialOnGoing();
      setMaterialOnGoing(res.data.data);
    };
    const getMaterialDone = async () => {
      let res = await autoCuttingApi.getMaterialDone();
      setMaterialDone(res.data.data);
    };
    getAutoCutting();
    getMaterialOnGoing();
    getMaterialDone();
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
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          // columns={{ xs: 2, sm: 2, md: 2, lg: 12 }}
        >
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
                  autoCuttingData={autoCuttingData}
                />
              </Grid>
              <Grid item xs={3}>
                <OverallOEECard
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  autoCuttingData={autoCuttingData}
                />
              </Grid>
              <Grid item xs={4}>
                <TotalDowntimeByMachine
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"TOTAL DOWNTIME BY MACHINE"}
                  setHeightChart={SET_HEIGHT_CHART}
                  autoCuttingData={autoCuttingData}
                />
              </Grid>
              <Grid item xs={3}>
                <DowntimeReason
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"DOWNTIME REASON"}
                  autoCuttingData={autoCuttingData}
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
                  autoCuttingData={autoCuttingData}
                />
              </Grid>
              <Grid item xs={6}>
                <TotalOutputByRy
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"TOTAL OUTPUT BY RY"}
                  materialOnGoing={materialOnGoing}
                  materialDone={materialDone}
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
