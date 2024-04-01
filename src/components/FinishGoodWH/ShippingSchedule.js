import React from "react";
import Card from "../Card";
import Title from "../Title";
import { TabShippingSchedule } from "./TabShippingSchedule";
import { Box } from "@mui/material";

const ShippingSchedule = (props) => {
  const { customStyle, header } = props;
  return (
    <Card customStyle={customStyle}>
      <Box height={"100%"}>
        <Title name={header} />
        <Box height={"88%"}>
          <TabShippingSchedule />
        </Box>
      </Box>
    </Card>
  );
};

export default ShippingSchedule;
