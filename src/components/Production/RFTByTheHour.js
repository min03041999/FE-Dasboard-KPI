import React, { useMemo } from "react";
import Card from "../Card";
import Title from "../Title";
import LineLegendIcon from "../../icons/LineLegendIcon";
import { Stack, Box } from "@mui/material";
import LineActualIcon from "../../icons/LineActualIcon";
import { OBJECT_TIME_RANGE } from "../../utils/times";
import { IS_TARGET_EFF_RFT } from "../../utils/base";
import { handleFakeRft } from "../../utils/helper";
import LineTarget from "../LineTarget";

import { useTranslation } from "react-i18next";

const RFTByTheHour = (props) => {
  const { customStyle, setHeightChart, header, type, section, data, line } =
    props;
  const [t] = useTranslation("global");

  const RFTByTheHour = useMemo(() => {
    const getDataLine = data?.find((item) => item.lineAlias === line);

    if (getDataLine) {
      const { assemblyRFT, stitchingRFT } = getDataLine;
      const dataRFT = section === "assembly" ? assemblyRFT : stitchingRFT;
      const keys = Object.keys(dataRFT).map((key) => key);

      let myArr = [];
      for (let key of keys) {
        myArr.push({
          time: key,
          //  actual: rft[key as ETimeRange],
          actual: handleFakeRft(dataRFT[key]),
          target: type === "stitching" ? 95 : 90,
        });
      }
      return myArr;
    }
  }, [data, line, section]);

  // const transformed = Object.entries(data[0])?.map(([key, value]) => ({
  //   time: key,
  //   actual: value,
  //   target:
  //     type === "eff"
  //       ? IS_TARGET_EFF_RFT.line.eff
  //       : IS_TARGET_EFF_RFT.line.rft[section],
  // }));

  const target =
    type === "eff"
      ? IS_TARGET_EFF_RFT.line[type]
      : IS_TARGET_EFF_RFT.line[type][section];

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
          sx={{ display: "flex", gap: "5px", alignItems: "center" }}
        >
          <LineLegendIcon stroke={"#0d47a1"} />
          <span style={{ fontSize: "10px", fontWeight: "600" }}>
            {t("production.rft-by-the-hour-target")}
          </span>
          <LineActualIcon />
          <span style={{ fontSize: "10px", fontWeight: "600" }}>
            {" "}
            {t("production.rft-by-the-hour-actual")}
          </span>
        </Box>
      </Stack>

      <LineTarget
        setHeightChart={setHeightChart}
        data={RFTByTheHour}
        ticks={target}
        domain={target}
      />
    </Card>
  );
};

export default RFTByTheHour;
