import React from 'react';

import { TableContainer, Table, TableHead, TableRow, TableBody } from '@mui/material';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


const TableStyle = {
    fontSize: "11px",
    fontWeight: "600",
    textAlign: "center",
}

const CustomTableStyle = {
    [`& .${tableCellClasses.root}`]: {
        borderBottom: "none",
        padding: "2px",
        lineHeight: "14px",
    },
    [`& .${tableCellClasses.body}`]: {
        padding: "6px 3px",
    }
}

const oddRowStyle = {
    background: "#f9f9f9",
};

const TableRowSpan = (props) => {
    const { setHeightTable, headerTable, formatCheck, data } = props;

    return (
        <TableContainer sx={{ maxHeight: setHeightTable }}>
            <Table padding="none" sx={{ ...CustomTableStyle }}>
                <TableHead sx={{ background: "#337ab7" }}>
                    <TableRow>
                        <TableCell rowSpan={2} sx={{ ...TableStyle, color: "#fff" }}>
                            Line
                        </TableCell>
                        <TableCell rowSpan={2} sx={{ ...TableStyle, color: "#fff" }}>
                            Target
                        </TableCell>
                        <TableCell colSpan={headerTable.length} sx={{ ...TableStyle, color: "#fff" }}>
                            Time
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        {headerTable?.map((item, index) => (
                            <TableCell key={index} sx={{ ...TableStyle, color: "#fff" }}>
                                {item}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item, index) => (
                        <TableRow key={index} sx={index % 2 === 0 ? {} : oddRowStyle}>
                            <TableCell sx={TableStyle}>{item?.line}</TableCell>
                            <TableCell sx={TableStyle}>{item?.target}</TableCell>
                            <TableCell sx={{ ...TableStyle, color: formatCheck(item?.actual["7:30-8:30"], item?.target) }}>
                                {item?.actual["7:30-8:30"]}
                            </TableCell>
                            <TableCell sx={{ ...TableStyle, color: formatCheck(item?.actual["8:30-9:30"], item?.target) }}>
                                {item?.actual["8:30-9:30"]}
                            </TableCell>
                            <TableCell sx={{ ...TableStyle, color: formatCheck(item?.actual["9:30-10:30"], item?.target) }}>
                                {item?.actual["9:30-10:30"]}
                            </TableCell>
                            <TableCell sx={{ ...TableStyle, color: formatCheck(item?.actual["10:30-11:30"], item?.target) }}>
                                {item?.actual["10:30-11:30"]}
                            </TableCell>
                            <TableCell sx={{ ...TableStyle, color: formatCheck(item?.actual["12:30-13:30"], item?.target) }}>
                                {item?.actual["12:30-13:30"]}
                            </TableCell>
                            <TableCell sx={{ ...TableStyle, color: formatCheck(item?.actual["13:30-14:30"], item?.target) }}>
                                {item?.actual["13:30-14:30"]}
                            </TableCell>
                            <TableCell sx={{ ...TableStyle, color: formatCheck(item?.actual["14:30-15:30"], item?.target) }}>
                                {item?.actual["14:30-15:30"]}
                            </TableCell>
                            <TableCell sx={{ ...TableStyle, color: formatCheck(item?.actual["15:30-16:30"], item?.target) }}>
                                {item?.actual["15:30-16:30"]}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableRowSpan;