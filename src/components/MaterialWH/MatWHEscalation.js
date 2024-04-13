import React from "react";
import Card from "../Card";
import Title from "../Title";
import DataTable from "../DataTable";

const MatWHEscalation = (props) => {
  const { customStyle, header, data } = props;
  const setHeightTable = {
    ...customStyle,
    height: parseFloat(parseInt(customStyle.height, 10) - 40),
  };
  return (
    <Card customStyle={customStyle}>
      <Title name="MATERIAL W/H ESCALATION" />
      <DataTable
        header={header}
        data={data}
        height={setHeightTable}
        customTableHeadStyle={{
          backgroundColor: "#337ab7",
          color: "#fff",
          textAlign: "center",
        }}
        customTextStyle={{ whiteSpace: "nowrap" }}
      />
    </Card>
  );
};

export default MatWHEscalation;
