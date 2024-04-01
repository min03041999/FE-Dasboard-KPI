import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box, Grid } from "@mui/material";
import Card from "../components/Card";

import OutputByLine from "../components/StockFitting/OutputByLine";

import { transformedData_OutPut } from "../utils/transformed";
import RFTByLine from "../components/StockFitting/RFTByLine";
import StoplineTop3Defect from "../components/StockFitting/StoplineTop3Defect";
import HourlyOutputByLine from "../components/StockFitting/HourlyOutputByLine";
import TotalOutputByRY from "../components/StockFitting/TotalOutputByRY";

const StockFittingScreen = () => {
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

  const SET_FULL_SCREEN_LAPTOP = screenHeight > 730 ? { height: `${screenHeight / 2 - 40}px` } : { height: "300px" };
  const SET_HEIGHT_CHART = screenHeight > 730 ? (screenHeight / 2) - 100 : 300 - 40;

  const OUTPUT_BY_LINE = [
    {
      "name_machine": "S1",
      "target": 1500,
      "actual": 879,
      "remaining": 621
    },
    {
      "name_machine": "S2",
      "target": 1350,
      "actual": 690,
      "remaining": 660
    },
    {
      "name_machine": "S3",
      "target": 1200,
      "actual": 1645,
      "remaining": -445
    },
    {
      "name_machine": "S4",
      "target": 1350,
      "actual": 750,
      "remaining": 600
    },
    {
      "name_machine": "S5",
      "target": 1350,
      "actual": 1010,
      "remaining": 340
    },
    {
      "name_machine": "S6",
      "target": 1530,
      "actual": 800,
      "remaining": 730
    },
    {
      "name_machine": "S7",
      "target": 3150,
      "actual": 3015,
      "remaining": 135
    },
    {
      "name_machine": "S8",
      "target": 1250,
      "actual": 910,
      "remaining": 340
    },
    {
      "name_machine": "S9",
      "target": 2800,
      "actual": 2600,
      "remaining": 200
    },
    {
      "name_machine": "S10",
      "target": 3150,
      "actual": 3005,
      "remaining": 145
    },
    {
      "name_machine": "S20",
      "target": 1350,
      "actual": 980,
      "remaining": 370
    },
    {
      "name_machine": "S21",
      "target": 2800,
      "actual": 2480,
      "remaining": 320
    },
    {
      "name_machine": "S22",
      "target": 2800,
      "actual": 2452,
      "remaining": 348
    },
    {
      "name_machine": "S23",
      "target": 2800,
      "actual": 2533,
      "remaining": 267
    },
    {
      "name_machine": "S24",
      "target": 2800,
      "actual": 2550,
      "remaining": 250
    }
  ];

  const tranformed_output = transformedData_OutPut(OUTPUT_BY_LINE);

  const RFT_BY_LINE = [
    {
      "name_machine": "S1",
      "rft": 70
    },
    {
      "name_machine": "S2",
      "rft": 72
    },
    {
      "name_machine": "S3",
      "rft": 77
    },
    {
      "name_machine": "S4",
      "rft": 76
    },
    {
      "name_machine": "S5",
      "rft": 72
    },
    {
      "name_machine": "S6",
      "rft": 76
    },
    {
      "name_machine": "S7",
      "rft": 0
    },
    {
      "name_machine": "S8",
      "rft": 77
    },
    {
      "name_machine": "S9",
      "rft": 83
    },
    {
      "name_machine": "S10",
      "rft": 0
    },
    {
      "name_machine": "S20",
      "rft": 70
    },
    {
      "name_machine": "S21",
      "rft": 0
    },
    {
      "name_machine": "S22",
      "rft": 0
    },
    {
      "name_machine": "S23",
      "rft": 0
    },
    {
      "name_machine": "S24",
      "rft": 0
    }
  ];

  return (
    <Box component={"div"} className="stockfitting-screen">
      <Box component={"div"}>
        <Breadcrumb>Stockfitting</Breadcrumb>
      </Box>

      <Box
        component={"div"}
        className="stockfitting-screen-body"
        sx={{ flexGrow: 1 }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}
        >
          <Grid item xs={12}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 4, md: 4, lg: 12 }}
            >
              <Grid item xs={4}>
                <OutputByLine header={"OUTPUT BY LINE"} customStyle={SET_FULL_SCREEN_LAPTOP} setHeightChart={SET_HEIGHT_CHART} data={tranformed_output} />
              </Grid>
              <Grid item xs={4}>
                <RFTByLine header={"RFT BY LINE"} customStyle={SET_FULL_SCREEN_LAPTOP} setHeightChart={SET_HEIGHT_CHART} data={RFT_BY_LINE} />
              </Grid>
              <Grid item xs={4}>
                <StoplineTop3Defect header={"STOPLINE TOP 3 DEFECT"} customStyle={SET_FULL_SCREEN_LAPTOP} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 4, md: 4, lg: 12 }}
            >
              <Grid item xs={6}>
                <HourlyOutputByLine header={"HOURLY OUTPUT BY LINE"} customStyle={SET_FULL_SCREEN_LAPTOP} />
              </Grid>
              <Grid item xs={6}>
                <TotalOutputByRY header={"TOTAL OUTPUT BY RY"} customStyle={SET_FULL_SCREEN_LAPTOP} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StockFittingScreen;
