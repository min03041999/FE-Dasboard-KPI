import React from "react";
import Card from "../Card";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../Title";
import FinishGoodCard from "./FinishGoodCard";

const StatisticsDashboard = (props) => {
  const { customStyle, fgwhData } = props;
  const setHeight = parseFloat(customStyle?.height) / 2 - 8;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12, lg: 12 }}>
          <FinishGoodCard
            name="TOTAL SHIPPED"
            titleNumber={fgwhData.totalShipped}
            setHeight={setHeight}
          />

          <FinishGoodCard
            name="WAITING FOR SHIPMENT"
            titleNumber={fgwhData.waitingShipment}
            setHeight={setHeight}
          />

          <FinishGoodCard
            name="WAITING FOR INSPECTION"
            titleNumber={fgwhData.waitingInspection}
            setHeight={setHeight}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12, lg: 12 }}>
          <Grid item xs={4}>
            <Card customStyle={{ height: setHeight + "px" }}>
              <Box display="flex" flexDirection="column" height="100%">
                <Title name={"MDP %"} customStyle={{ textAlign: "center" }} />
                <Box
                  flex={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h3" component="h3" fontWeight={500}>
                    {fgwhData.MDP[0].MDPPercent}%
                  </Typography>
                </Box>
                <Typography variant="h5" fontWeight={600}>
                  TARGET: {fgwhData.MDP[0].MDPTarget}%
                </Typography>
              </Box>
            </Card>
          </Grid>
          <FinishGoodCard
            name="WAITING FOR TESTING"
            titleNumber={fgwhData.waitingTesting}
            setHeight={setHeight}
          />

          <FinishGoodCard
            name="NOT FULLY IMPORTED"
            titleNumber={fgwhData.notFullyImported}
            setHeight={setHeight}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StatisticsDashboard;
