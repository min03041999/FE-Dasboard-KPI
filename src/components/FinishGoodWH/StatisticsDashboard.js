import React from "react";
import Card from "../Card";
import { Box, Grid, Typography } from "@mui/material";
import Title from "../Title";

const StatisticsDashboard = (props) => {
  const { customStyle } = props;
  const setHeight = parseFloat(customStyle?.height) / 2 - 8;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12, lg: 12 }}>
          <Grid item xs={4}>
            <Card customStyle={{ height: setHeight + "px" }}>
              <Box display="flex" flexDirection="column" height="100%">
                <Title
                  name={"TOTAL SHIPPED"}
                  customStyle={{ textAlign: "center" }}
                />
                <Box
                  flex={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h3" component="h3" fontWeight={500}>
                    4823 PO
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card customStyle={{ height: setHeight + "px" }}>
              <Box display="flex" flexDirection="column" height="100%">
                <Title
                  name={"WAITING FOR SHIPMENT"}
                  customStyle={{ textAlign: "center" }}
                />
                <Box
                  flex={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h3" component="h3" fontWeight={500}>
                    281 PO
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card customStyle={{ height: setHeight + "px" }}>
              <Box display="flex" flexDirection="column" height="100%">
                <Title
                  name={"WAITING FOR INSPECTION"}
                  customStyle={{ textAlign: "center" }}
                />
                <Box
                  flex={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h3" component="h3" fontWeight={500}>
                    729 PO
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
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
                    95.19%
                  </Typography>
                </Box>
                <Typography variant="h5" fontWeight={600}>
                  TARGET: 94%
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card customStyle={{ height: setHeight + "px" }}>
              <Box display="flex" flexDirection="column" height="100%">
                <Title
                  name={"WAITING FOR TESTING"}
                  customStyle={{ textAlign: "center" }}
                />
                <Box
                  flex={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h3" component="h3" fontWeight={500}>
                    45 PO
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card customStyle={{ height: setHeight + "px" }}>
              <Box display="flex" flexDirection="column" height="100%">
                <Title
                  name={"NOT FULLY IMPORTED"}
                  customStyle={{ textAlign: "center" }}
                />
                <Box
                  flex={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h3" component="h3" fontWeight={500}>
                    403 PO
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StatisticsDashboard;
