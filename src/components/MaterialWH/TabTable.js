import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  HEADER_DAILY_KANBAN_STATUS,
  HEADER_LEATHER_SUMMARY,
  HEADER_MATQCCHECK,
} from "../../data";
import DataTable from "../DataTable";
import { tranformed_date } from "../../utils/transformed";

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return value === index && <React.Fragment>{children}</React.Fragment>;
}

function TabDailyKanbanStatus(props) {
  const { setHeight, dailyRequest, dailyIngrogress, dailyDone } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const DATA_REQUEST = dailyRequest?.map((data) => {
    return {
      DepName: data.DepName,
      KanbanNo: data.Kanban_no,
      ReceiveDateRequest: tranformed_date(data.Date) + " " + data.Hours,
    };
  });

  const DATA_IN_PROGRESS = dailyIngrogress?.map((data) => {
    return {
      DepName: data.DepName,
      KanbanNo: data.Kanban_no,
      ReceiveDateRequest: tranformed_date(data.Date) + " " + data.Hours,
    };
  });

  const DATA_DONE = dailyDone?.map((data) => {
    return {
      DepName: data.DepName,
      KanbanNo: data.Kanban_no,
      ReceiveDateRequest: tranformed_date(data.Date) + " " + data.Hours,
    };
  });

  const setHeightTable = {
    ...setHeight,
    height: parseFloat(parseInt(setHeight.height, 10) - 90),
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
          <Tab label="REQUEST" />
          <Tab label="IN PROGRESS" />
          <Tab label="DONE" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DataTable
          header={HEADER_DAILY_KANBAN_STATUS}
          data={DATA_REQUEST}
          height={setHeightTable}
          customTableHeadStyle={{
            backgroundColor: "#bfbfbf",
            color: "#000",
            textAlign: "center",
          }}
          alignText="center"
          customTextStyle={{ whiteSpace: "nowrap", fontSize: 11 }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DataTable
          header={HEADER_DAILY_KANBAN_STATUS}
          data={DATA_IN_PROGRESS}
          height={setHeightTable}
          customTableHeadStyle={{
            backgroundColor: "#ffce54",
            color: "#000",
            textAlign: "center",
          }}
          alignText="center"
          customTextStyle={{ whiteSpace: "nowrap", fontSize: 11 }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DataTable
          header={HEADER_DAILY_KANBAN_STATUS}
          data={DATA_DONE}
          height={setHeightTable}
          customTableHeadStyle={{
            backgroundColor: "#a0d468",
            color: "#000",
            textAlign: "center",
          }}
          alignText="center"
          customTextStyle={{ whiteSpace: "nowrap", fontSize: 11 }}
        />
      </CustomTabPanel>
    </Box>
  );
}

function TabDailyInspectionReport(props) {
  const { setHeight, leatherSumary, matQCCheck } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const DATA_LEATHER_SUMMARY = leatherSumary?.map((data) => {
    return {
      ReceiveDate: tranformed_date(data.ReceiveDate),
      ReportID: data.ReportID,
      SupplierName: data.SupplierName,
      MatID: data.MatID,
      MatName: data.MatName,
      Qty: data.Qty,
      InspecQty_Other: data.InspecQty_Other,
      DefectQty: data.DefectQty,
      Per_Defect: `${data.Per_Defect}%`,
      Per_Released: `${data.Per_Released}%`,
      InspectionResult: data.InspectionResult,
      QC_InspectionDate: tranformed_date(data.QC_InspectionDate),
    };
  });

  const DATA_MATQCCHECK = matQCCheck.map((data) => {
    return {
      ReceivedDate: tranformed_date(data.ReceivedDate),
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
      QC_InspectionDate: tranformed_date(data.QC_InspectionDate),
    };
  });

  const setHeightTable = {
    ...setHeight,
    height: parseFloat(parseInt(setHeight.height, 10) - 90),
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
          <Tab label="LEATHER" />
          <Tab label="SYN, TEXTILE, ACCESSORY" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DataTable
          header={HEADER_LEATHER_SUMMARY}
          data={DATA_LEATHER_SUMMARY}
          height={setHeightTable}
          customTableHeadStyle={{
            bgcolor: "#337ab7",
            color: "#fff",
            textAlign: "center",
          }}
          alignText="center"
          customTextStyle={{ whiteSpace: "nowrap", fontSize: 11 }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DataTable
          header={HEADER_MATQCCHECK}
          data={DATA_MATQCCHECK}
          height={setHeightTable}
          customTableHeadStyle={{
            bgcolor: "#337ab7",
            color: "#fff",
            textAlign: "center",
          }}
          alignText="center"
          customTextStyle={{ whiteSpace: "nowrap", fontSize: 11 }}
        />
      </CustomTabPanel>
    </Box>
  );
}

export { TabDailyInspectionReport, TabDailyKanbanStatus };
