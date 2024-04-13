import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "../Card";
import Title from "../Title";

const FinishGoodCard = (props) => {
  const { name, titleNumber, setHeight } = props;
  return (
    <Grid item xs={4}>
      <Card customStyle={{ height: setHeight + "px" }}>
        <Box display="flex" flexDirection="column" height="100%">
          <Title name={name} customStyle={{ textAlign: "center" }} />
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h3" component="h3" fontWeight={500}>
              {titleNumber} PO
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};

export default FinishGoodCard;
