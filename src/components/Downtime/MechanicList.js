import React from "react";
import Card from "../Card";
import Title from "../Title";

const MechanicList = (props) => {
  const { customStyle, header } = props;
  return (
    <Card customStyle={customStyle}>
      <Title name={header} />
    </Card>
  );
};

export default MechanicList;
