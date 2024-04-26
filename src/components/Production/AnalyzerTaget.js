import _ from "lodash";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import Title from "../Title";
import { Typography, Box } from "@mui/material";
import { handleFakeRft, handleFakeEff } from "../../utils/helper";

const AnalyzerTarget = (props) => {
  const { customStyle, header, target, type, data, line, section } = props;
  const [effData, setEffData] = useState();

  useEffect(() => {
    if (section) {
      const getDataLine = data?.find((item) => item.lineAlias === line);
      if (getDataLine) {
        if (type === "rft") {
          setEffData(handleFakeRft(getDataLine.lineAlias, getDataLine.quality));
        } else {
          setEffData(handleFakeEff(getDataLine.lineAlias));
        }
      }
    } else {
      setEffData(data);
    }
  }, [data, line, section]);

  return (
    <Card customStyle={customStyle}>
      <Box component={"div"} className="analyzer-target">
        <Title name={header} />
        <Typography className="analyzer-target-actual">{effData}</Typography>
        <Typography className="analyzer-target-purpose">{target}</Typography>
      </Box>
    </Card>
  );
};

export default AnalyzerTarget;
