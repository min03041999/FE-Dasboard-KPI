import React from 'react';
import Typography from '@mui/material/Typography';

import { FACTORY } from "../utils/env";

const Breadcrumb = (props) => {
    const { children } = props;

    return (
        <Typography variant="h3" component="h3" className='breadcrumb'>
            <span style={{ color: "#049962" }}>{FACTORY}</span> - {children}
        </Typography>
    )
}

export default Breadcrumb;