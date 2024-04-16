import React from "react";
import Card from "../Card";
import Title from "../Title";
import { Box, Typography } from "@mui/material";
import {
  TOTAL_BREAKDOWN_BY_MACHINE,
  TOTAL_DOWNTIME_BY_MACHINE,
} from "../../data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const TotalDowntimeByReason = (props) => {
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
        <Title name={header} />

        <Box
          flex={1}
          display={"flex"}
          alignItems={"center"}
          height={"100%"}
          width={"100%"}
        >
          <ResponsiveContainer
            width="95%"
            height={setHeightChart}
            debounce={50}
          >
            <BarChart
              layout="vertical"
              data={TOTAL_DOWNTIME_BY_MACHINE}
              margin={{ left: 5, right: 50 }}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                fontSize={11}
                fontWeight={600}
              />
              <Bar dataKey="value" fill="#118dff" barSize={30} minPointSize={2}>
                <LabelList
                  dataKey="value"
                  position="right"
                  fontSize={11}
                  fontWeight={600}
                  formatter={(value) => `${value} min`}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Card>
  );
};

export default TotalDowntimeByReason;
