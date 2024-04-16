import React from "react";
import Card from "../Card";
import Title from "../Title";
import { Box, Typography } from "@mui/material";
import { TOTAL_BREAKDOWN_BY_MACHINE } from "../../data";
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis } from "recharts";

const TotalChartByDowntime = (props) => {
  const { customStyle, header, setHeightChart } = props;
  //   console.log(setHeightChart);
  return (
    <Card customStyle={customStyle}>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Title name={header} />
          <Box display={"flex"} alignItems={"baseline"} gap={1}>
            <Typography fontSize={60} fontWeight={600}>
              26
            </Typography>
            <Typography fontSize={20}>Times</Typography>
          </Box>
        </Box>
        <ResponsiveContainer width="100%" height={setHeightChart}>
          <BarChart
            data={TOTAL_BREAKDOWN_BY_MACHINE}
            margin={{ top: 20, bottom: 35 }}
          >
            <XAxis dataKey="name" fontSize={11} fontWeight={600} />
            <Bar dataKey="value" fill="#118dff">
              <LabelList
                dataKey="value"
                position="top"
                fontSize={11}
                fontWeight={600}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default TotalChartByDowntime;
