import React from "react";
import Card from "../Card";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Title from "../Title";

const OverallOEECard = (props) => {
  const { customStyle, autoCuttingData = [] } = props;
  const setHeight = parseFloat(parseInt(customStyle?.height) / 3 - 10.5);

  const totalUptime = autoCuttingData?.reduce(
    (acc, item) => acc + item.Operating,
    0
  );
  const totalAvailableTime = autoCuttingData?.reduce(
    (acc, item) => acc + item.AvailableTime,
    0
  );
  const totalActualOutput = autoCuttingData?.reduce(
    (acc, item) => acc + item.ActualOutput,
    0
  );
  const totalTheoreticalOutput = autoCuttingData?.reduce(
    (acc, item) => acc + item.TheoreticalOutput,
    0
  );
  const totalPairs = autoCuttingData?.reduce(
    (acc, item) => acc + item.ActualOutput,
    0
  );
  const totalDefect = autoCuttingData?.reduce(
    (acc, item) => acc + item.DefectiveProduct,
    0
  );
  const goodPairs = totalPairs - totalDefect;

  const dataOverall = [
    {
      header: "AVAILABILITY",
      label: "UPTIME",
      lables: "AVAILABLE TIME",
      labelNumber: totalUptime,
      labelNumbers: totalAvailableTime,
      backgroundColor: "#82adf9",
    },
    {
      header: "PERFORMANCE",
      label: "TOTAL ACTUAL OUTPUT",
      lables: "TOTAL THEORETICAL OUTPUT",
      labelNumber: totalActualOutput,
      labelNumbers: totalTheoreticalOutput,
      backgroundColor: "#82ca9d",
    },
    {
      header: "QUANLITY",
      label: "GOOD PAIRS",
      lables: "TOTAL PAIRS",
      labelNumber: goodPairs,
      labelNumbers: totalPairs,
      backgroundColor: "#8884d8",
    },
  ];

  return (
    <Grid container spacing={2}>
      {dataOverall.map((data, index) => (
        <Grid item xs={12} key={index}>
          <Card
            customStyle={{
              height: setHeight,
              backgroundColor: data.backgroundColor,
            }}
          >
            <Box display={"flex"} flexDirection={"column"} height={"100%"}>
              <Title
                name={data.header}
                customStyle={{ textAlign: "center", color: "#fff" }}
              />
              <Box flex={1} display={"flex"} alignItems={"center"}>
                <Grid container>
                  <Grid item xs={5}>
                    <Typography
                      fontSize={13}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      {data.labelNumber} <br /> {data.label}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Divider
                      orientation="vertical"
                      sx={{
                        height: "85%",
                        borderLeftWidth: 1,
                        bgcolor: "black",
                      }}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography
                      fontSize={13}
                      fontWeight={500}
                      textAlign={"center"}
                    >
                      {data.labelNumbers} <br /> {data.lables}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OverallOEECard;
