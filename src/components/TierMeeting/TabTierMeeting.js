import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DataTable from "../DataTable";
import { HEADER_TIER_MEETING } from "../../data";
import { tranformed_date } from "../../utils/transformed";

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return value === index && <React.Fragment>{children}</React.Fragment>;
}

function TabTierMeeting(props) {
  const { setHeight, tierMeetingData } = props;

  const [value, setValue] = React.useState(0);

  const DATA_TIER_MEETING = tierMeetingData.map((data) => {
    return {
      tier_level: data.tier_level,
      meeting_date: tranformed_date(data.meeting_date),
      action_plan_no: data.action_plan_no,
      area: data.area,
      issue: data.issue,
      cause: data.cause,
      action_detail: data.action_detail,
      p_i_c_name: data.p_i_c_name,
      due_date: tranformed_date(data.due_date),
      status: data.status,
      remark: data.remark,
    };
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const setHeightTable = {
    ...setHeight,
    height: parseFloat(parseInt(setHeight.height, 10) - 70),
  };

  return (
    <Box sx={{ width: "100%", height: "93%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          marginBottom: "3px",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="ALL" />
          <Tab label="TIER MEETING" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DataTable
          header={HEADER_TIER_MEETING}
          data={DATA_TIER_MEETING}
          height={setHeightTable}
          customTableHeadStyle={{
            bgcolor: "#337ab7",
            color: "#fff",
            height: 60,
            textAlign: "center",
          }}
          alignText="center"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DataTable
          header={HEADER_TIER_MEETING}
          data={DATA_TIER_MEETING}
          height={setHeightTable}
          customTableHeadStyle={{
            bgcolor: "#337ab7",
            color: "#fff",
            height: 60,
            textAlign: "center",
          }}
          alignText="center"
        />
      </CustomTabPanel>
    </Box>
  );
}

export { TabTierMeeting };
