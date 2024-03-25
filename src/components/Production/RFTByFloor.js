import React from 'react';
import Card from '../Card';
import Title from '../Title';
import LineLegendIcon from '../../icons/LineLegendIcon';
import TwoToneLegendIcon from '../../icons/TwoToneLegendIcon';
import { Stack, Box } from '@mui/material';

import ColumnChartMixed from '../ColumnChartMixed';

import { COLUMN_CHART_MIXED_COLOR } from '../../utils/config.js';
import { IS_TARGET_EFF_RFT } from '../../utils/base.js';

const RFTByFloor = (props) => {
    const { customStyle, setHeightChart, header, type, data } = props; // Data data_1: line, data_2: value (rft, eff), data_3: target

    const { is_target, is_not_target } = COLUMN_CHART_MIXED_COLOR[type];

    const ticks = [0, IS_TARGET_EFF_RFT.floor[type]];

    return (
        <Card customStyle={customStyle}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Title name={header} />
                <Box component={'div'} sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <LineLegendIcon stroke={'#0d47a1'} />
                    <span style={{ fontSize: '10px', fontWeight: '600' }}>Target</span>
                    <TwoToneLegendIcon firstColor={is_target} secondColor={is_not_target} />
                    <span style={{ fontSize: '10px', fontWeight: '600' }}>Actual</span>
                </Box>
            </Stack>

            <ColumnChartMixed setHeightChart={setHeightChart} data={data} ticks={ticks} is_target={is_target} is_not_target={is_not_target} />
        </Card>
    )
}

export default RFTByFloor;