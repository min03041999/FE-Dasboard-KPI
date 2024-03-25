import React from 'react';
import Card from '../Card';
import Title from '../Title';

import { Grid, Typography } from '@mui/material';

const AnalyzerAttendance = (props) => {
    const { customStyle, header, data } = props;

    return (
        <Card customStyle={customStyle}>
            <Title name={header} />
            <Grid container spacing={1} sx={{ marginTop: "5px" }}>
                <Grid item xs={6} sm={6} md={6} sx={{ alignSelf: "center" }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: "600", textAlign: "center" }}>
                        ACTUAL
                        <br />
                        1920
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6} sx={{ borderLeft: "2px solid #000", alignSelf: "center" }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: "600", textAlign: "center" }}>
                        TARGET
                        <br />
                        10440
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default AnalyzerAttendance;