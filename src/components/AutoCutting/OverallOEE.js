import React from "react";
import Card from "../Card";
import Title from "../Title";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { Box, Typography } from "@mui/material";

const data01 = [{ name: "Group A", value: 400 }];
const data02 = [{ name: "A1", value: 100 }];
const data03 = [{ name: "A2", value: 200 }];

const OverallOEE = (props) => {
  const { customStyle, header, setHeightChart } = props;
  return (
    <Card customStyle={customStyle}>
      <Title name={header} />
      <Box>
        <Typography variant="h3" textAlign={"center"} fontWeight={500}>
          86.16%
        </Typography>
      </Box>
      <Box width={"100%"} height={"90%"}>
        <ResponsiveContainer width="100%" height={setHeightChart}>
          <PieChart>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={30}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={70}
              fill="#82ca9d"
            />
            <Pie
              data={data03}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#82adf9"
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default OverallOEE;
