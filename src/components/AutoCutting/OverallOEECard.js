import React from "react";
import Card from "../Card";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Title from "../Title";

const OverallOEECard = (props) => {
  const { customStyle } = props;

  //   console.log(parseFloat(customStyle.height) / 3);
  const setHeight = parseFloat(customStyle?.height) / 3 - 10.5;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card
          customStyle={{ height: setHeight + "px", backgroundColor: "#82adf9" }}
        >
          <Box display={"flex"} flexDirection={"column"} height={"100%"}>
            <Title
              name={"AVAILABILITY"}
              customStyle={{ textAlign: "center", color: "#fff" }}
            />
            <Box flex={1} display={"flex"} alignItems={"center"}>
              <Grid container>
                <Grid item xs={5}>
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    8324 <br /> UPTIME
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
                      height: "100%",
                      borderLeftWidth: 1,
                      bgcolor: "black",
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    9000 <br /> AVAILABLE TIME
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card
          customStyle={{ height: setHeight + "px", backgroundColor: "#82ca9d" }}
        >
          <Box display={"flex"} flexDirection={"column"} height={"100%"}>
            <Title
              name={"PERFORMANCE"}
              customStyle={{ textAlign: "center", color: "#fff" }}
            />
            <Box flex={1} display={"flex"} alignItems={"center"}>
              <Grid container>
                <Grid item xs={5}>
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    54602 <br /> TOTAL ACTUAL OUTPUT
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
                      height: "100%",
                      borderLeftWidth: 1,
                      bgcolor: "black",
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    59892 <br /> TOTAL THEORETICAL OUTPUT
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card
          customStyle={{ height: setHeight + "px", backgroundColor: "#8884d8" }}
        >
          <Box display={"flex"} flexDirection={"column"} height={"100%"}>
            <Title
              name={"QUANLITY"}
              customStyle={{ textAlign: "center", color: "#fff" }}
            />
            <Box flex={1} display={"flex"} alignItems={"center"}>
              <Grid container>
                <Grid item xs={5}>
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    54548 <br /> GOOD PAIRS
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
                      height: "100%",
                      borderLeftWidth: 1,
                      bgcolor: "black",
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    fontSize={14}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    54602 <br /> TOTAL PAIRS
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OverallOEECard;
