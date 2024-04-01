import React from "react";
import Card from "../Card";
import Title from "../Title";
import { TabDailyInspectionReport } from "./TabTable";

const DailyInspectionReport = (props) => {
  const { customStyle, header } = props;
  return (
    <Card customStyle={customStyle}>
      <Title name={header} />
      <TabDailyInspectionReport />
    </Card>
  );
};

export default DailyInspectionReport;
