import React from "react";
import Card from "../Card";
import DefectTable from "./DefectTable";

const TopDefectSupplier = (props) => {
  const { customStyle, header, data } = props;
  return (
    <Card customStyle={customStyle}>
      <DefectTable header={header} data={data} />
    </Card>
  );
};

export default TopDefectSupplier;
