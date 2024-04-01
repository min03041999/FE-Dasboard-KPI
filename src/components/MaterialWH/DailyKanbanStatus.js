import React from "react";
import Card from "../Card";
import Title from "../Title";
import { TabDailyKanbanStatus } from "./TabTable";

const DailyKanbanStatus = (props) => {
  const { customStyle, header } = props;
  return (
    <Card customStyle={customStyle}>
      <Title name={header} />
      <TabDailyKanbanStatus />
    </Card>
  );
};

export default DailyKanbanStatus;
