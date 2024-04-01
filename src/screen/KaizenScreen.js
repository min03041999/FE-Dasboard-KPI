import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

import { Box } from '@mui/material';
import KaizenImprovementByModel from '../components/Kaizen/KaizenImprovementByModel';

const KaizenScreen = () => {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    //Set Height
    useEffect(() => {
        function handleResize() {
            setScreenHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const SET_FULL_SCREEN_LAPTOP = screenHeight > 730 ? { height: `${screenHeight - 60}px` } : { height: "100%" };

    return (
        <React.Fragment>
            <Breadcrumb>
                Kaizen
            </Breadcrumb>

            <Box component={"div"}>
                <KaizenImprovementByModel header={"KAIZEN IMPROVEMENT BY MODEL"} customStyle={SET_FULL_SCREEN_LAPTOP} />
            </Box>
        </React.Fragment>
    )
}

export default KaizenScreen;