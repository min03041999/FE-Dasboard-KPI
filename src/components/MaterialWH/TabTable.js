import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  DAILY_DONE_KANBAN,
  DAILY_IN_PROGRESS_KANBAN,
  DAILY_REQUEST_KANBAN,
  HEADER_DAILY_KANBAN_STATUS,
  HEADER_LEATHER_SUMMARY,
  HEADER_MATQCCHECK,
  LEATHER_SUMMARY,
  MATQCCHECK,
} from "../../data";
import DataTable from "../DataTable";

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

function TabDailyKanbanStatus() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab
            label="REQUEST"
            // style={{ backgroundColor: "#ebebeb", color: "#000" }}
          />
          <Tab
            label="IN PROGRESS"
            // style={{ backgroundColor: "#fffd8d", color: "#000" }}
          />
          <Tab
            label="DONE"
            // style={{ backgroundColor: "#90EE90", color: "#000" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DataTable
          header={HEADER_DAILY_KANBAN_STATUS}
          data={DATA_REQUEST}
          height="77%"
          customTableHeadStyle={{ backgroundColor: "#bfbfbf", color: "#000" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DataTable
          header={HEADER_DAILY_KANBAN_STATUS}
          data={DATA_IN_PROGRESS}
          height="77%"
          customTableHeadStyle={{ backgroundColor: "#ffce54", color: "#000" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DataTable
          header={HEADER_DAILY_KANBAN_STATUS}
          data={DATA_DONE}
          height="77%"
          customTableHeadStyle={{ backgroundColor: "#a0d468", color: "#000" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </CustomTabPanel>
    </Box>
  );
}

const DATA_LEATHER_SUMMARY = LEATHER_SUMMARY.map((data) => {
  return {
    ReceiveDate: data.ReceiveDate,
    ReportID: data.ReportID,
    SupplierName: data.SupplierName,
    MatID: data.MatID,
    MatName: data.MatName,
    Qty: data.Qty,
    InspecQty_Other: data.InspecQty_Other,
    DefectQty: data.DefectQty,
    Per_Defect: data.Per_Defect,
    Per_Released: data.Per_Released,
    InspectionResult: data.InspectionResult,
    QC_InspectionDate: data.QC_InspectionDate,
  };
});

const DATA_MATQCCHECK = MATQCCHECK.map((data) => {
  return {
    ReceivedDate: data.ReceivedDate,
    Report_No: data.Report_No,
    SupplierName: data.SupplierName,
    MatID: data.MatID,
    MaterialName: data.MaterialName,
    RY: data.RY,
    Article: data.Article,
    Total_Qty: data.Total_Qty,
    Inspected_Qty: data.Inspected_Qty,
    DefectQty: data.DefectQty,
    Inspection_Result: data.Inspection_Result,
    Test_Result: data.Test_Result,
    Final_Status: data.Final_Status,
    QC_InspectionDate: data.QC_InspectionDate,
  };
});

function TabDailyInspectionReport() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab
            label="LEATHER"
            // style={{ backgroundColor: "#ebebeb", color: "#000" }}
          />
          <Tab
            label="SYN, TEXTILE, ACCESSORY"
            // style={{ backgroundColor: "#fffd8d", color: "#000" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DataTable
          header={HEADER_LEATHER_SUMMARY}
          data={DATA_LEATHER_SUMMARY}
          height="77%"
          customTableHeadStyle={{ bgcolor: "#337ab7", color: "#fff" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DataTable
          header={HEADER_MATQCCHECK}
          data={DATA_MATQCCHECK}
          height="77%"
          customTableHeadStyle={{ bgcolor: "#337ab7", color: "#fff" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </CustomTabPanel>
    </Box>
  );
}

export { TabDailyInspectionReport, TabDailyKanbanStatus };
