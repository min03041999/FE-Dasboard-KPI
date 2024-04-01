import React from "react";
import Card from "../Card";
import { Box, Grid } from "@mui/material";
import Title from "../Title";
import PieLegendIcon from "../../icons/PieLegendIcon";
import MatCheckChart from "./MatCheckChart";
import LeatherChart from "./LeatherChart";

const PieLegend = [
  {
    NameEng: "Inspection",
    NameVit: "Kiem duyet",
    color: "#fc6e51",
  },
  {
    NameEng: "Pass",
    NameVit: "Hoan thanh",
    color: "#a0d468",
  },
  {
    NameEng: "Fail",
    NameVit: "Loi",
    color: "#fb4343",
  },
  {
    NameEng: "Waiting for lab",
    NameVit: "Cho thi nghiem",
    color: "#ffce54",
  },
];

const MatCheckStatus = (props) => {
  const { customStyle, header, setHeightChart } = props;

  return (
    <Card customStyle={customStyle}>
      <Box display={"flex"} flexDirection={"column"} height={"100%"}>
        <Title name={header} />
        <Grid container columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {PieLegend.map((item, i) => (
              <PieLegendIcon
                key={i}
                color={item.color}
                nameVN={item.NameVit}
                nameEN={item.NameEng}
              />
            ))}
          </Grid>
          <Grid
            item
            xs={5}
            sm={5}
            md={5}
            sx={{ width: "100%", height: "100%" }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Box textAlign={"center"} fontWeight={"bold"}>
                  GENERAL TRACKING
                </Box>
              </Grid>
              <Grid item xs={12}>
                <MatCheckChart setHeightChart={setHeightChart} />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={5}
            sm={5}
            md={5}
            sx={{ width: "100%", height: "100%" }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Box textAlign={"center"} fontWeight={"bold"}>
                  LEATHER SUMMARY
                </Box>
              </Grid>
              <Grid item xs={12}>
                <LeatherChart setHeightChart={setHeightChart} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default MatCheckStatus;
