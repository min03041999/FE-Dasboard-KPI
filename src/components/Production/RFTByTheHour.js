import React from 'react';
import Card from '../Card';
import Title from '../Title';
import LineLegendIcon from '../../icons/LineLegendIcon';
import { Stack, Box } from '@mui/material';
import LineActualIcon from '../../icons/LineActualIcon';

import { IS_TARGET_EFF_RFT } from '../../utils/base';
import LineTarget from '../LineTarget';

const RFTByTheHour = (props) => {
    const { customStyle, setHeightChart, header, type, section, data } = props;

    const transformed = Object.entries(data[0])?.map(([key, value]) => ({
        time: key,
        actual: value,
        target: type === "eff" ? IS_TARGET_EFF_RFT.line.eff : IS_TARGET_EFF_RFT.line.rft[section]
    }));

    const target = type === "eff" ? IS_TARGET_EFF_RFT.line[type] : IS_TARGET_EFF_RFT.line[type][section];

    return (
        <Card customStyle={customStyle}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Title name={header} />
                <Box component={'div'} sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <LineLegendIcon stroke={'#0d47a1'} />
                    <span style={{ fontSize: '10px', fontWeight: '600' }}>Target</span>
                    <LineActualIcon />
                    <span style={{ fontSize: '10px', fontWeight: '600' }}>Actual</span>
                </Box>
            </Stack>

            <LineTarget setHeightChart={setHeightChart} data={transformed} ticks={target} domain={target} />
        </Card>
    )
}

export default RFTByTheHour;