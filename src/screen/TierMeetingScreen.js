import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Box } from "@mui/material";
import { TabTierMeeting } from "../components/TierMeeting/TabTierMeeting";
import Card from "../components/Card";

const TierMeetingScreen = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const SET_FULL_SCREEN_LAPTOP = { height: `${screenHeight - 70}px` };

  return (
    <Box component={"div"} className="tier-meeting-screen">
      <Box component={"div"}>
        <Breadcrumb>Tier Meeting</Breadcrumb>
      </Box>

      <Box
        component={"div"}
        className="tier-meeting-screen-body"
        sx={{ flexGrow: 1 }}
      >
        <Card customStyle={SET_FULL_SCREEN_LAPTOP}>
          <TabTierMeeting />
        </Card>
      </Box>
    </Box>
  );
};

export default TierMeetingScreen;
