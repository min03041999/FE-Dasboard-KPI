import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box, Grid } from "@mui/material";
import Card from "../components/Card";
import StatisticsDashboard from "../components/FinishGoodWH/StatisticsDashboard";
import RepackingReason from "../components/FinishGoodWH/RepackingReason";
import ShippingSchedule from "../components/FinishGoodWH/ShippingSchedule";
import FinishedGoodWHEscalation from "../components/FinishGoodWH/FinishedGoodWHEscalation";

const FGWHScreen = () => {
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

  return (
    <Box component={"div"} className="fgwh-screen">
      <Box component={"div"}>
        <Breadcrumb>FG W/H</Breadcrumb>
      </Box>

      <Box component={"div"} className="fgwh-screen-body" sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          // columns={{ xs: 12, sm: 4, md: 12, lg: 12 }}
        >
          <Grid item xs={12}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 2, sm: 4, md: 4, lg: 12 }}
            >
              <Grid item xs={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <StatisticsDashboard customStyle={SET_FULL_SCREEN_LAPTOP} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <RepackingReason
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"REPACKING REASON"}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 6, sm: 6, md: 12, lg: 12 }}
            >
              <Grid item xs={6}>
                <ShippingSchedule
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"SHIPPING SCHEDULE"}
                />
              </Grid>
              <Grid item xs={6}>
                <FinishedGoodWHEscalation
                  customStyle={SET_FULL_SCREEN_LAPTOP}
                  header={"FINISHED GOODS W/H ESCALATION"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FGWHScreen;
