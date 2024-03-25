import React from 'react';
import Card from '../Card';
import Title from '../Title';
import { Stack, Box } from '@mui/material';
import LineLegendIcon from '../../icons/LineLegendIcon';

import { OBJECT_TIME_RANGE } from '../../utils/times';
import LineSimple from '../LineSimple';

const PPHByTheHour = (props) => {
    const { customStyle, setHeightChart, header, worker, data } = props;

    const myKeys = Object.keys(OBJECT_TIME_RANGE);
    let transformed = [];

    if (data && worker) {
        const keys = new Set(Object.keys(data[0]).slice(0, 9));

        transformed = Object.entries(myKeys)?.map(([key, value]) => ({
            time: value,
            actual: data && keys.has(value) ? parseFloat((data[0][value] / worker).toFixed(1)) : 0,
        }))
    }

    const maxvalue = Math.max(...transformed?.map(obj => obj.actual));

    const domain = maxvalue !== 0 ? [0, maxvalue] : ["auto", "auto"];

    return (
        <Card customStyle={customStyle}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Title name={header} />
                <Box component={'div'} sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <LineLegendIcon stroke={'#4caf50'} />
                    <span style={{ fontSize: '10px', fontWeight: '600' }}>Target</span>
                </Box>
            </Stack>

            <LineSimple setHeightChart={setHeightChart} data={transformed} domain={domain} />
        </Card>
    )
}

export default PPHByTheHour;