import React from "react";
import Card from "../Card";
import Title from "../Title";
import { Box, Typography } from "@mui/material";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const repackingchartdata = [
  {
    mainCode: "1300",
    subCode: "ZZ",
    defectName: "NO SEW ( EP NONG )",
    qty: 2,
  },
  {
    mainCode: "200",
    subCode: "ZZ",
    defectName: "INSIDE THE SHOE ( BEN TRONG GIAY )",
    qty: 12,
  },
  {
    mainCode: "310",
    subCode: "ZZ",
    defectName: "UPPER MATERIALS ( VAT TU MU GIAY )",
    qty: 1,
  },
  {
    mainCode: "320",
    subCode: "ZZ",
    defectName: "UPPER STITCHING ( MAY MU GIAY )",
    qty: 31,
  },
  {
    mainCode: "330",
    subCode: "ZZ",
    defectName:
      "UPPER TREATMENTS (LOGO, EMBROIDERY, HF WELDING,DE- ( GIA CONG MU GIAY ( LOGO, THEU, EP CAO TAN, EP NONG )",
    qty: 1,
  },
];
const colors = ["#fb4343", "#a0d468", "#ffce54", "#118dff", "#ff5d5d"];

const RepackingReason = (props) => {
  const { customStyle, header } = props;
  return (
    <Card customStyle={customStyle}>
      <Title name={header} customStyle={{ textAlign: "center" }} />
      <Typography
        variant="h4"
        component="h4"
        fontWeight={500}
        textAlign={"center"}
      >
        39 PO
      </Typography>
      <Box width="100%" height="80%" display="flex">
        <Box width="60%" height="100%">
          <ResponsiveContainer width="100%" height={"105%"}>
            <BarChart
              data={repackingchartdata}
              margin={{ top: 20, bottom: 35 }}
            >
              <Bar dataKey="qty">
                {repackingchartdata.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
                ))}
                <LabelList
                  dataKey="qty"
                  position="top"
                  fontSize={11}
                  fill="#000"
                  fontWeight={600}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Box width="40%" display={"flex"} flexDirection={"column"} gap={2}>
          <Box display={"flex"} alignItems={"flex-start"} gap={1}>
            <Box width={"2rem"} height={"0.7rem"} bgcolor={"#fb4343"}></Box>
            <Box fontSize={"0.7rem"} fontWeight={"700"} flex={2}>
              NO SEW ( EP NONG )
            </Box>
          </Box>

          <Box display={"flex"} alignItems={"flex-start"} gap={1}>
            <Box width={"2rem"} height={"0.7rem"} bgcolor={"#a0d468"}></Box>
            <Box fontSize={"0.7rem"} fontWeight={"700"} flex={2}>
              INSIDE THE SHOE ( BEN TRONG GIAY )
            </Box>
          </Box>

          <Box display={"flex"} alignItems={"flex-start"} gap={1}>
            <Box width={"2rem"} height={"0.7rem"} bgcolor={"#ffce54"}></Box>
            <Box fontSize={"0.7rem"} fontWeight={"700"} flex={2}>
              UPPER MATERIALS ( VAT TU MU GIAY )
            </Box>
          </Box>

          <Box display={"flex"} alignItems={"flex-start"} gap={1}>
            <Box width={"2rem"} height={"0.7rem"} bgcolor={"#118dff"}></Box>
            <Box fontSize={"0.7rem"} fontWeight={"700"} flex={2}>
              UPPER STITCHING ( MAY MU GIAY )
            </Box>
          </Box>

          <Box display={"flex"} alignItems={"flex-start"} gap={1}>
            <Box width={"2rem"} height={"0.7rem"} bgcolor={"#ff5d5d"}></Box>
            <Box fontSize={"0.7rem"} fontWeight={"700"} flex={2}>
              UPPER TREATMENTS (LOGO, EMBROIDERY, HF WELDING,DE- ( GIA CONG MU
              GIAY ( LOGO, THEU, EP CAO TAN, EP NONG )
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography fontWeight={500} textAlign={"center"}>
        TOP 5 DEFECT REASON BY PAIRS
      </Typography>
    </Card>
  );
};

export default RepackingReason;
