import React from "react";
import Card from "../Card";
import Title from "../Title";
import { Stack, Box } from "@mui/material";

import ColumnLegendIcon from "../../icons/ColumnLegendIcon";
import ColumnStacked from "../ColumnStacked";

const OutPutByFloor = (props) => {
  const { customStyle, setHeightChart, header, data } = props;

  return (
    <Card customStyle={customStyle}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Title name={header} />
        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <ColumnLegendIcon
            name={"Target"}
            color={"black"}
            customStyle={{ height: "0.5rem" }}
          />
          <ColumnLegendIcon name={"Actual"} color={"#89b558"} />
          <ColumnLegendIcon name={"Unreached"} color={"#fd5151"} />
        </Box>
      </Stack>

      <ColumnStacked
        setHeightChart={setHeightChart}
        display={true}
        data={data}
      />
    </Card>
  );
};

export default OutPutByFloor;
