import React from "react";
import Card from "../Card";
import DefectTable from "./DefectTable";

const TopDefectSubcon = (props) => {
  const { customStyle, header, data } = props;

  const data_top_3_subcon = data?.map((item) => {
    return {
      SupplierName: item.Supplier,
      Materials: [...item.Materials],
      Defect: [...item.Defect],
    };
  });

  // console.log(data_top_3_subcon);

  return (
    <Card customStyle={customStyle}>
      <DefectTable header={header} data={data_top_3_subcon} />
    </Card>
  );
};

export default TopDefectSubcon;
