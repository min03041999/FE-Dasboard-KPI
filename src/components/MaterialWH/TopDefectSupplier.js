import React from "react";
import Card from "../Card";
import DefectTable from "./DefectTable";

import { useTranslation } from "react-i18next";

const TopDefectSupplier = (props) => {
  const { customStyle, data } = props;
  const [t] = useTranslation("global");

  const HEADER_N762 = [
    t("material-wh.top-defect-supplier"),
    t("material-wh.common-material-type"),
    t("material-wh.common-defect"),
  ];

  return (
    <Card customStyle={customStyle}>
      <DefectTable header={HEADER_N762} data={data} />
    </Card>
  );
};

export default TopDefectSupplier;
