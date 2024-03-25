import React from 'react';
import { Typography, Box, Stack } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// import { format } from "date-fns";
import { DatePicker } from "@mui/x-date-pickers";

import { FACTORY } from "../utils/env";

const ItemStyle = {
    width: "55px",
    border: "1px solid #95a4a7",
    color: "#fff",
    backgroundColor: "#95a4a7",
    padding: "11px 4px",
    textAlign: "center",
    borderRadius: "5px",
    cursor: "pointer",
}

const ItemActiveStyle = {
    width: "55px",
    border: "1px solid #049962",
    color: "#fff",
    backgroundColor: "#049962",
    padding: "11px 4px",
    textAlign: "center",
    borderRadius: "5px",
    cursor: "pointer",
}

const FLOOR = [
    "A-F1", "A-F2", "A-F4", "B-F2", "C-F2", "D-F1", "D-F3"
];

const LINE = [
    "A1-1", "A1-2", "A1-3", "A1-4", "A1-5", "A1-6"
];

const Navigation = (props) => {

    const { navigate, setNavigate, date, setDate } = props;

    const onActiveFactory = (e) => {
        const factory = e.target.innerText;
        if (factory) setNavigate({ ...navigate, floor: "", line: "", section: "" });
    }

    const onActiveFloor = (floor) => {
        setNavigate({ ...navigate, floor: floor, line: "", section: "" });
    }

    const onActiveLine = (line) => {
        setNavigate({ ...navigate, line: line, section: "assembly" })
    }

    const onActiveSection = (section) => {
        setNavigate({ ...navigate, section: section })
    }

    return (
        <Box className='navigation'>
            {/* Factory */}
            <Stack
                direction={{ xs: 'row', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
            >
                <div className='navigation-main'>
                    <Typography className='navigation-text'>FACTORY</Typography> <ChevronRightIcon />
                </div>
                <div style={ItemActiveStyle} >
                    <Typography className='navigation-text' onClick={onActiveFactory}>{FACTORY}</Typography>
                </div>
            </Stack>
            {/* Factory */}

            {/* FLOOR */}
            <Stack
                direction={{ xs: 'row', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
                sx={{ marginTop: "10px" }}
            >
                <div className='navigation-main'>
                    <Typography className='navigation-text'>FLOOR</Typography> <ChevronRightIcon />
                </div>
                {
                    FLOOR.map((item, index) => (
                        <div style={navigate.floor === item ? ItemActiveStyle : ItemStyle} key={index} onClick={() => onActiveFloor(item)}>
                            <Typography className='navigation-text'>{item}</Typography>
                        </div>
                    ))
                }
            </Stack>
            {/* FLOOR */}

            {/* LINE */}
            <Stack
                direction={{ xs: 'row', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
                sx={{ marginTop: "10px" }}
            >
                <div className='navigation-main'>
                    <Typography className='navigation-text'>LINE</Typography> <ChevronRightIcon />
                </div>
                {
                    LINE.map((item, index) => (
                        <div style={navigate.line === item ? ItemActiveStyle : ItemStyle} key={index} onClick={() => onActiveLine(item)}>
                            <Typography className='navigation-text'>{item}</Typography>
                        </div>
                    ))
                }
            </Stack>
            {/* LINE */}

            {/* Date & Section */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 2 }}
                sx={{ marginTop: "10px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        id="DateFrom"
                        name="DateFrom"
                        format="DD-MM-YYYY"
                        value={date}
                        onChange={(value) => {
                            setDate(value)
                        }}
                        slotProps={{
                            textField: {
                                size: "small",
                            },
                        }} />
                </LocalizationProvider>

                {
                    navigate.line ? (
                        <Stack
                            direction={{ xs: 'row', sm: 'row' }}
                            spacing={{ xs: 1, sm: 2, md: 2 }}>
                            {
                                ["assembly", "stitching"].map((item, index) => (
                                    <div style={navigate.section === item ? { ...ItemActiveStyle, width: "70px" } : { ...ItemStyle, width: "70px" }} key={index} onClick={() => onActiveSection(item)}>
                                        <Typography className='navigation-text' sx={{ textTransform: "uppercase" }}>{item}</Typography>
                                    </div>
                                ))
                            }
                        </Stack>
                    ) : ""
                }
            </Stack>
            {/* Date & Section */}
        </Box>
    )
}

export default Navigation;