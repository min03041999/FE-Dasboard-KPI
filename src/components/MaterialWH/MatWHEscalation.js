import React from "react";
import Card from "../Card";
import Title from "../Title";
import DataTable from "../DataTable";

const MatWHEscalation = (props) => {
  const { customStyle, header, data } = props;

  return (
    <Card customStyle={customStyle}>
      <Title name="MATERIAL W/H ESCALATION" />
      <DataTable
        header={header}
        data={data}
        height={"93%"}
        customTableHeadStyle={{
          backgroundColor: "#337ab7",
          color: "#fff",
        }}
        customTextStyle={{ whiteSpace: "nowrap" }}
      />
    </Card>
  );
};

export default MatWHEscalation;
