import React from "react";
import Card from "../Card";
import Title from "../Title";
import { Box, Typography } from "@mui/material";
// import { OEE_BY_MACHINE } from "../../data";

// const DATA_DOWNTIME_REASON = OEE_BY_MACHINE.map((data) => {
//   return {
//     StartUp: data.StartUp,
//     ShutDown: data.ShutDownData,
//     ChangeOver: data.ChangeOver,
//     Breakdown: data.Equip,
//     IdleTime: data.IdleTime,
//   };
// });

// const TOTAL_DATA = {
//   StartUp: 0,
//   ShutDown: 0,
//   ChangeOver: 0,
//   Breakdown: 0,
//   IdleTime: 0,
// };

// DATA_DOWNTIME_REASON.forEach((data) => {
//   for (let key in data) {
//     if (data.hasOwnProperty(key)) {
//       TOTAL_DATA[key] += data[key];
//     }
//   }
// });

// const totalSum = Object.values(TOTAL_DATA).reduce((acc, val) => acc + val, 0);
// console.log(totalSum);

const DowntimeReason = (props) => {
  const { customStyle, header } = props;
  return (
    <Card customStyle={customStyle}>
      <Box height="100%" display="flex" flexDirection="column">
        <Box>
          <Title name={header} />
          <Typography
            textAlign={"end"}
            fontSize={13}
            fontWeight={600}
            sx={{ textDecoration: "underline" }}
            color="#049962"
          >
            UNIT:MINUTE
          </Typography>
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box display="flex" alignItems={"center"}>
            <Box width={"30%"}>
              <Typography fontWeight="bold">Breakdown</Typography>
            </Box>
            <Box flex={1}>
              <Box
                padding={1}
                bgcolor={"#118dff"}
                width={"11%"}
                textAlign={"end"}
                fontWeight={600}
                color={"#fff"}
              >
                57
              </Box>
            </Box>
          </Box>

          <Box display="flex" alignItems={"center"}>
            <Box width={"30%"}>
              <Typography fontWeight="bold">Changeover</Typography>
            </Box>
            <Box flex={1}>
              <Box
                padding={1}
                bgcolor={"#118dff"}
                width={"25%"}
                textAlign={"end"}
                fontWeight={600}
                color={"#fff"}
              >
                119
              </Box>
            </Box>
          </Box>

          <Box display="flex" alignItems={"center"}>
            <Box width={"30%"}>
              <Typography fontWeight="bold">Idle time</Typography>
            </Box>
            <Box flex={1}>
              <Box
                padding={1}
                bgcolor={"#118dff"}
                width={"21%"}
                textAlign={"end"}
                fontWeight={600}
                color={"#fff"}
              >
                100
              </Box>
            </Box>
          </Box>

          <Box display="flex" alignItems={"center"}>
            <Box width={"30%"}>
              <Typography fontWeight="bold">Shutdown</Typography>
            </Box>
            <Box flex={1}>
              <Box
                padding={1}
                bgcolor={"#118dff"}
                width={"0%"}
                textAlign={"end"}
                fontWeight={600}
                color={"#fff"}
              >
                0
              </Box>
            </Box>
          </Box>

          <Box display="flex" alignItems={"center"}>
            <Box width={"30%"}>
              <Typography fontWeight="bold">Start up</Typography>
            </Box>
            <Box flex={1}>
              <Box
                padding={1}
                bgcolor={"#118dff"}
                width={"42%"}
                textAlign={"end"}
                fontWeight={600}
                color={"#fff"}
              >
                200
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default DowntimeReason;
