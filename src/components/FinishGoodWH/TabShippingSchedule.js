import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { HEADER_SHIPPING_SCHEDULE, SHIPPING_SCHEDULE } from "../../data";
import DataTable from "../DataTable";

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return value === index && <React.Fragment>{children}</React.Fragment>;
}

const DATA_SHIPPING_SCHEDULE = SHIPPING_SCHEDULE.map((data) => {
  return {
    RY: data.RY,
    PO: data.PO,
    MODEL_NAME: data.MODEL_NAME,
    ARTICLE: data.ARTICLE,
    COUNTRY: data.COUNTRY,
    QTY: data.QTY,
    SCAN: data.SCAN,
    UNSCAN: data.UNSCAN,
    FGT: data.FGT,
    BONDING: data.BONDING,
    CMA: data.CMA,
    A01: data.A01,
    CPSIA: data.CPSIA,
    RESULT: data.RESULT,
    FG_STATUS: data.FG_STATUS,
    LINE: data.LINE,
    LOCATION: data.LOCATION,
    SHIPPED_STATUS: data.SHIPPED_STATUS,
  };
});

function TabShippingSchedule() {
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
          <Tab label="30/03" />
          <Tab label="01/04" />
          <Tab label="02/04" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DataTable
          header={HEADER_SHIPPING_SCHEDULE}
          data={DATA_SHIPPING_SCHEDULE}
          height="100%"
          customTableHeadStyle={{ bgcolor: "#337ab7", color: "#fff" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DataTable
          header={HEADER_SHIPPING_SCHEDULE}
          data={DATA_SHIPPING_SCHEDULE}
          height="100%"
          customTableHeadStyle={{ bgcolor: "#337ab7", color: "#fff" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <DataTable
          header={HEADER_SHIPPING_SCHEDULE}
          data={DATA_SHIPPING_SCHEDULE}
          height="100%"
          customTableHeadStyle={{ bgcolor: "#337ab7", color: "#fff" }}
          customTextStyle={{ whiteSpace: "nowrap" }}
        />
      </CustomTabPanel>
    </Box>
  );
}

export { TabShippingSchedule };
