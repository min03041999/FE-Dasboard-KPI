import React from 'react';
import Card from '../Card';
import Title from '../Title';
import TableRowSpan from '../TableRowSpan';

const HourlyOutputByFloor = (props) => {
    const { customStyle, setHeightTable, header, data } = props;

    const HEADER_TABLE = ["07:30 08:30", "08:30 09:30", "09:30 10:30", "10:30 11:30", "12:30 13:30", "13:30 14:30", "14:30 15:30", "15:30 16:30"];

    const formatCheck = (actual, target) => {
        return actual < target ? "red" :
            actual >= target - (target * 5) / 100 &&
                actual <= target - 1 ? "orange" : "green";
    }

    return (
        <Card customStyle={customStyle}>
            <Title name={header} />

            <TableRowSpan setHeightTable={setHeightTable} headerTable={HEADER_TABLE} formatCheck={formatCheck} data={data} />
        </Card>
    )
}

export default HourlyOutputByFloor;