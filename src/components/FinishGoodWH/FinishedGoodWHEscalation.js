import React from "react";
import Card from "../Card";
import Title from "../Title";
import DataTable from "../DataTable";
import {
  FINISHED_GOODS_WH_ESCALATION,
  HEADER_FINISHED_GOODS_WH_ESCALATION,
} from "../../data";

const FinishedGoodWHEscalation = (props) => {
  const { customStyle, header } = props;
  const setHeightTable = {
    ...customStyle,
    height: parseFloat(parseInt(customStyle.height, 10) - 40),
  };
  return (
    <Card customStyle={customStyle}>
      <Title name={header} customStyle={{ textAlign: "center" }} />
      <DataTable
        header={HEADER_FINISHED_GOODS_WH_ESCALATION}
        data={FINISHED_GOODS_WH_ESCALATION}
        height={setHeightTable}
        customTableHeadStyle={{
          bgcolor: "#337ab7",
          color: "#fff",
          textAlign: "center",
        }}
        customTextStyle={{ whiteSpace: "nowrap" }}
      />
    </Card>
  );
};

export default FinishedGoodWHEscalation;
