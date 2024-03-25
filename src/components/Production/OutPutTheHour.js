import React from 'react';
import Card from '../Card';
import Title from '../Title';
import { Stack, Box } from '@mui/material';

import LineLegendIcon from '../../icons/LineLegendIcon';
import ThreeToneLegendIcon from '../../icons/ThreeToneLegendIcon';

import { OBJECT_TIME_RANGE } from '../../utils/times';
import ColumnSimple from '../ColumnSimple';

const OutPutTheHour = (props) => {
    const { customStyle, setHeightChart, header, target, plannedWorkingHours, data } = props;

    const myTarget =
        target && plannedWorkingHours && plannedWorkingHours !== 0
            ? Math.ceil(target / 9)
            : 0;

    const ticks = myTarget !== 0 ? [myTarget] : ["auto", "auto"];
    const domain = myTarget !== 0 ? [0, myTarget] : ["auto", "auto"];

    const myKeys = Object.keys(OBJECT_TIME_RANGE);
    const keys = new Set(Object.keys(data[0]).slice(0, 9));

    const transformed = Object.entries(myKeys)?.map(([key, value]) => ({
        time: value,
        actual: data && keys.has(value) ? data[0][value] : 0,
        target: myTarget,
    }))

    return (
        <Card customStyle={customStyle}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Title name={header} />
                <Box component={"div"} sx={{ display: "flex", flexDirection: "row", gap: "5px", alignItems: "center" }}>
                    <LineLegendIcon stroke={'#0d47a1'} />
                    <span style={{ fontSize: '10px', fontWeight: '600' }}>Target</span>
                    <ThreeToneLegendIcon firstColor={"#2e7d32"} secondColor={"#ef6c00"} thirdColor={"#c62828"} />
                    <span style={{ fontSize: '10px', fontWeight: '600' }}>Actual</span>
                </Box>
            </Stack>

            <ColumnSimple setHeightChart={setHeightChart} data={transformed} ticks={ticks} domain={domain} />
        </Card>
    )
}

export default OutPutTheHour;