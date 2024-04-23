import React from "react";
import { Typography } from "@mui/material";

const TitleStyle = {
  color: "#049962",
  fontWeight: "600",
};

const Title = (props) => {
  const { name, customStyle } = props;
  return (
    <Typography className="title" sx={{ ...TitleStyle, ...customStyle }}>
      {name}
    </Typography>
  );
};

export default Title;
