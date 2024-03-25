import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  DAILY_DONE_KANBAN,
  DAILY_IN_PROGRESS_KANBAN,
  DAILY_REQUEST_KANBAN,
  HEADER_DAILY_KANBAN_STATUS,
} from "../data";
import DataTable from "./DataTable";

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return value === index && <React.Fragment>{children}</React.Fragment>;
}

const DATA_REQUEST = DAILY_REQUEST_KANBAN.map((data) => {
  return {
    DepName: data.DepName,
    KanbanNo: data.Kanban_no,
    ReceiveDateRequest: data.Date + " " + data.Hours,
  };
});

const DATA_IN_PROGRESS = DAILY_IN_PROGRESS_KANBAN.map((data) => {
  return {
    DepName: data.DepName,
    KanbanNo: data.Kanban_no,
    ReceiveDateRequest: data.Date + " " + data.Hours,
  };
});

const DATA_DONE = DAILY_DONE_KANBAN.map((data) => {
  return {
    DepName: data.DepName,
    KanbanNo: data.Kanban_no,
    ReceiveDateRequest: data.Date + " " + data.Hours,
  };
});
// console.log(DATA_REQUEST);

export default function TabTable() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "3px" }}
      >
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab
            label="REQUEST"
            style={{ backgroundColor: "#ebebeb", color: "#000" }}
          />
          <Tab
            label="IN PROGRESS"
            style={{ backgroundColor: "#fffd8d", color: "#000" }}
          />
          <Tab
            label="DONE"
            style={{ backgroundColor: "#90EE90", color: "#000" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DataTable
          header={HEADER_DAILY_KANBAN_STATUS}
          data={DATA_REQUEST}
          height="73%"
          bgColor="#ebebeb"
          color="#000"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DataTable
          header={HEADER_DAILY_KANBAN_STATUS}
          data={DATA_IN_PROGRESS}
          height="73%"
          bgColor="#fffd8d"
          color="#000"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DataTable
          header={HEADER_DAILY_KANBAN_STATUS}
          data={DATA_DONE}
          height="73%"
          bgColor="#90EE90"
          color="#000"
        />
      </CustomTabPanel>
    </Box>
  );
}
