import React, { useEffect, useState } from "react";
import Card from "../Card";
import Title from "../Title";
import ColumnLegendIcon from "../../icons/ColumnLegendIcon";
import { Box } from "@mui/material";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import { MECHANIC_REPAIRING_TIME } from "../../data";

const MechanicRepairingTime = (props) => {
  const { customStyle, header } = props;
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

  const SET_HEIGHT_CHART =
    screenHeight > 730 ? screenHeight / 3 - 40 : 300 - 40;

  return (
    <Card customStyle={customStyle}>
      <Title name={header} />
      <Box display={"flex"} gap={3}>
        <ColumnLegendIcon
          name={"Repairing Time"}
          color={"#118dff"}
          customStyle={{
            borderRadius: "50%",
            width: "1rem",
            height: "1rem",
          }}
        />
        <ColumnLegendIcon
          name={"Waiting Time"}
          color={"#f09538"}
          customStyle={{
            borderRadius: "50%",
            width: "1rem",
            height: "1rem",
          }}
        />
      </Box>
      <Box>
        <ResponsiveContainer width={"100%"} height={SET_HEIGHT_CHART}>
          <BarChart data={MECHANIC_REPAIRING_TIME}>
            <XAxis
              dataKey="name"
              fontSize={11}
              fontWeight={600}
              axisLine={false}
              tickLine={false}
            />
            <Bar
              dataKey="repairingtime"
              fill="#118dff"
              label={{ fill: "white", fontWeight: "bold" }}
            />
            <Bar
              dataKey="waitingtime"
              fill="#f09538"
              label={{ fill: "white", fontWeight: "bold" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default MechanicRepairingTime;
