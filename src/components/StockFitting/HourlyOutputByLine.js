import React from 'react';
import Card from '../Card';
import Title from '../Title';
import TableRowSpan from '../TableRowSpan';

const HourlyOutputByLine = (props) => {
    const { customStyle, header } = props;

    const HEADER_TABLE = ["07:30 08:30", "08:30 09:30", "09:30 10:30", "10:30 11:30", "12:30 13:30", "13:30 14:30", "14:30 15:30", "15:30 16:30"];

    const DATA = [
        {
            "name_machine": "S1",
            "Target": 150,
            "h1": 180,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S2",
            "Target": 150,
            "h1": 160,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S3",
            "Target": 150,
            "h1": 550,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S4",
            "Target": 150,
            "h1": 150,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S5",
            "Target": 200,
            "h1": 280,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S6",
            "Target": 150,
            "h1": 170,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S7",
            "Target": 350,
            "h1": 750,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S8",
            "Target": 150,
            "h1": 240,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S9",
            "Target": 350,
            "h1": 600,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S10",
            "Target": 350,
            "h1": 750,
            "h2": 0,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S20",
            "Target": 75,
            "h1": 0,
            "h2": 120,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S21",
            "Target": 350,
            "h1": 710,
            "h2": 710,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S22",
            "Target": 350,
            "h1": 720,
            "h2": 700,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S23",
            "Target": 350,
            "h1": 600,
            "h2": 750,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        },
        {
            "name_machine": "S24",
            "Target": 350,
            "h1": 630,
            "h2": 680,
            "h3": 0,
            "h4": 0,
            "h5": 0,
            "h6": 0,
            "h7": 0,
            "h8": 0
        }
    ];

    const transformed_data = DATA?.map((item) => {
        return {
            line: item.name_machine,
            target: item.Target,
            actual: {
                "7:30-8:30": item.h1,
                "8:30-9:30": item.h2,
                "9:30-10:30": item.h3,
                "10:30-11:30": item.h4,
                "12:30-13:30": item.h5,
                "13:30-14:30": item.h6,
                "14:30-15:30": item.h7,
                "15:30-16:30": item.h8
            }
        }
    })

    const formatCheck = (actual, target) => {
        return actual < target ? "red" :
            actual >= target - (target * 5) / 100 &&
                actual <= target - 1 ? "orange" : "green";
    }

    const setHeightTable = { ...customStyle, height: parseFloat(parseInt(customStyle.height, 10) - 40) };

    return (
        <Card customStyle={customStyle}>
            <Title name={header} />
            <TableRowSpan setHeightTable={setHeightTable} headerTable={HEADER_TABLE} formatCheck={formatCheck} data={transformed_data} />
        </Card>
    )
}

export default HourlyOutputByLine;