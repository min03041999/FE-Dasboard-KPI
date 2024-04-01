import React, { useState } from 'react';
import Card from "../Card";
import Title from '../Title';
import DataTable from '../DataTable';
import PieSimple from '../PieSimple';
import PieLegendIcon from '../../icons/PieLegendIcon';

import { Stack, Box, InputLabel, MenuItem, FormControl, Select, Grid } from '@mui/material';

const StoplineTop3Defect = (props) => {
    const { customStyle, header } = props;

    const dataLine = [
        { id: 1, line: "S1" },
        { id: 2, line: "S2" },
        { id: 3, line: "S3" },
        { id: 4, line: "S4" },
        { id: 5, line: "S5" },
        { id: 6, line: "S6" },
        { id: 7, line: "S7" },
        { id: 8, line: "S8" },
        { id: 9, line: "S9" },
        { id: 10, line: "S10" },
        { id: 11, line: "S11" },
        { id: 12, line: "S12" },
        { id: 13, line: "S13" },
        { id: 14, line: "S14" },
        { id: 15, line: "S15" },
        { id: 16, line: "S16" },
        { id: 17, line: "S17" },
        { id: 18, line: "S18" },
        { id: 19, line: "S19" },
        { id: 20, line: "S20" },
        { id: 21, line: "S21" },
        { id: 22, line: "S22" },
        { id: 23, line: "S23" },
        { id: 24, line: "S24" },
        { id: 25, line: "S25" },
        { id: 26, line: "S26" },
        { id: 27, line: "S27" },
    ];

    const [line, setLine] = useState(dataLine[0].line);
    const handleChange = (event) => {
        setLine(event.target.value);
    };


    const DIVIDE_COLUMN = { ...customStyle, height: parseFloat(parseInt(customStyle.height, 10) / 2) - 30 };

    const DATA = [
        {
            "Code": "400-2",
            "NameVit": "NHIEM BAN ( VET DO)",
            "NameEng": "CONTAMINATION?(Stains)",
            "Qty": 11,
            "TQty": "24.44%",
            "Picture": "\\\\192.168.30.1\\ERP_Folder\\QIP\\N38\\Pivot88_DefectPhotolaiyih_LHG240330067_31_400-2_2024330749504235.jpg",
            "Action_Plan": null,
            "RowNumber": "1"
        },
        {
            "Code": "400-3",
            "NameVit": "KEO CAO/LEM KEO HOAC LEM XU LI",
            "NameEng": "OVER CEMENTING OR PRIMING",
            "Qty": 10,
            "TQty": "22.22%",
            "Picture": "\\\\192.168.30.1\\ERP_Folder\\QIP\\N38\\Pivot88_DefectPhotolaiyih_LHG240330067_31_400-3_2024330740437339.jpg",
            "Action_Plan": null,
            "RowNumber": "2"
        },
        {
            "Code": "400-1",
            "NameVit": "NHIEM BAN ( VET DO)",
            "NameEng": "CONTAMINATION(Stains)",
            "Qty": 10,
            "TQty": "22.22%",
            "Picture": "\\\\192.168.30.1\\ERP_Folder\\QIP\\N38\\Pivot88_DefectPhotolaiyih_LHG240330067_31_400-1_2024330753369045.jpg",
            "Action_Plan": null,
            "RowNumber": "3"
        },
        {
            "Code": "",
            "NameVit": "Khác",
            "NameEng": "Others",
            "Qty": 14,
            "TQty": "31.11%",
            "Picture": "",
            "Action_Plan": "",
            "RowNumber": "4"
        }
    ];

    const colorDefectName = ["red", "darkgreen", "yellow", "lightgreen"];
    const colorPieChart = ["#5dd15b", "#46583e", "#ced11e", "#f33434"];

    const percentData = DATA?.map(
        (item, index) => ({
            name: `Defect ${index + 1}`,
            value: Math.round(Number(item.TQty?.replace("%", "") || 0)), // Use 0 if item.TQty is null

            fill: colorPieChart[index % colorPieChart.length],
        })
    );

    const totalValue = percentData.reduce(
        (total, data) => total + data.value,
        0
    );

    if (totalValue !== 100 && percentData.length > 0) {
        const lastItem = percentData[percentData.length - 1];
        const adjustment = 100 - totalValue;
        lastItem.value += adjustment;
    }

    if (totalValue > 100) {
        const excess = totalValue - 100;
        percentData[percentData.length - 1].value -= excess;
    }

    const HEADER_TABLE = ["Defect Name", "Action plan & Follow up", "Picture"];

    const CUSTOM_DATA = DATA?.map((item) => {
        return {
            name: (
                <span>
                    {item.NameVit}
                    <br />
                    {item.NameEng}
                </span>
            ),
            action_name: item.Action_Plan,
            picture: item.Picture,
        }
    })


    return (
        <Card customStyle={customStyle}>
            <Stack direction="row" justifyContent="space-between" alignItems="unset" spacing={2} >
                <Title name={header} />
                <Box component={"div"} sx={{ minWidth: 80, display: "flex", flexDirection: "row", gap: "5px", alignItems: "center" }}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Line</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={line}
                            label="Line"
                            onChange={handleChange}
                            MenuProps={{
                                getContentAnchorEl: null,
                                anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                },
                                transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'left',
                                },
                                PaperProps: {
                                    style: {
                                        maxHeight: '200px', // Set the desired height for the dropdown list
                                    },
                                },
                            }}
                        >
                            {
                                dataLine?.map((item, index) => (
                                    <MenuItem key={index} value={item.line}>{item.line}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} >
                    <Box component={"div"} {...DIVIDE_COLUMN} style={{ display: "flex" }}>
                        <Grid container columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                            <Grid item xs={6} sm={6} md={6} sx={{ width: "100%", height: "100%" }}>
                                <PieSimple data={percentData} setHeightChart={DIVIDE_COLUMN} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} sx={{ width: "100%", height: "100%" }}>
                                {
                                    DATA?.map((item, index) => {
                                        const colorIndex = index % colorDefectName.length;

                                        return (
                                            <PieLegendIcon
                                                key={index}
                                                color={`${colorDefectName[colorIndex]}`}
                                                nameVN={item.NameVit}
                                                nameEN={item.NameEng}
                                            />
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box component={"div"}  {...DIVIDE_COLUMN}>
                        <DataTable header={HEADER_TABLE} data={CUSTOM_DATA} customTableHeadStyle={{ backgroundColor: "#337ab7", color: "#fff", padding: "5px" }} customTextStyle={{ color: "#049962", fontSize: "10px" }} />
                    </Box>
                </Grid>

            </Grid>
        </Card>
    )
}

export default StoplineTop3Defect;