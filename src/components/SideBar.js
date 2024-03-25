import * as React from 'react';
import { List, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import { Link, useLocation } from "react-router-dom";

import Inventory2Icon from '@mui/icons-material/Inventory2';

const SideBarStyle = {
    position: "fixed",
    height: "100vh",
    backgroundColor: "#25364b",
    boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
    overflow: 'hidden',
    // transition: "0.2s"
}

const HeaderSideBarStyle = {
    height: "70px",
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "22px",
    lineHeight: "80px",
}

const NoActiveStyle = {
    fontSize: "16px",
    color: "#fff",
    padding: "20px",
}

const ActiveStyle = {
    padding: "20px",
    borderLeft: "5px solid #fff",
    backgroundColor: "#1d2b3c",
    transition: "0.3s",
}

const sideMenu = [
    {
        icon: <Inventory2Icon />,
        text: "Production",
        path: "/",
    },
    {
        icon: <Inventory2Icon />,
        text: "Material W/H",
        path: "/material",
    },
    {
        icon: <Inventory2Icon />,
        text: "Auto Cutting",
        path: "/auto-cutting",
    },
    {
        icon: <Inventory2Icon />,
        text: "Stockfitting",
        path: "/stockfitting",
    },
    {
        icon: <Inventory2Icon />,
        text: "FG W/H",
        path: "/fg-wh"
    },
    {
        icon: <Inventory2Icon />,
        text: "Kaizen",
        path: "/kaizen"
    },
    {
        icon: <Inventory2Icon />,
        text: "Tier Meeting",
        path: "/tier-meeting",
    },
    {
        icon: <Inventory2Icon />,
        text: "Quality Tracking",
        path: "/quality-tracking",
    }
]

const SideBar = (props) => {
    const { open } = props;

    const sidebarWidth = open ? "250px" : "75px";
    const { pathname } = useLocation();
    const active = sideMenu.findIndex((e) => e.path === pathname);

    return (
        <div style={{ ...SideBarStyle, width: sidebarWidth }}>
            <Typography style={HeaderSideBarStyle}>LHG {open ? "- DASHBOARD" : ""}</Typography>

            {/* List Menu */}
            <List component="nav">
                {
                    sideMenu.map((listItem, index) =>
                    (
                        <ListItemButton component={Link} to={listItem.path} key={index} sx={active === index ? ActiveStyle : NoActiveStyle}
                        >
                            <ListItemIcon sx={{
                                color: "#fff",
                                fontSize: "16px",
                            }}>
                                {listItem.icon}
                            </ListItemIcon>
                            {open ? (
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        color: "#fff",
                                        letterSpacing: "1.5px",
                                    }}
                                >
                                    {listItem.text}
                                </Typography>
                            ) : (
                                ""
                            )}
                        </ListItemButton>
                    ))
                }
            </List>
        </div>
    )
}

export default SideBar;