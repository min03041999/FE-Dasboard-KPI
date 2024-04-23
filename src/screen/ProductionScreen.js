import React, { useState, useEffect } from "react";

import { Box, Grid } from "@mui/material";
import dayjs from "dayjs";

import Breadcrumb from "../components/Breadcrumb";
import Navigation from "../components/Navigation";

import Slick from "../components/Slick";

import { FACTORY } from "../utils/env";
import { IS_TARGET_EFF_RFT } from "../utils/base";
import { transformedData_EFF, transformedData_RFT } from "../utils/transformed";

import EFFByFloor from "../components/Production/EFFByFloor";
import RFTByFloor from "../components/Production/RFTByFloor";
import OutPutByFloor from "../components/Production/OutPutByFloor";
import HourlyOutputByFloor from "../components/Production/HourlyOutputByFloor";
import AttendanceByFloor from "../components/Production/AttendanceByFloor";

import EFFByTheHour from "../components/Production/EFFByTheHour";
import RFTByTheHour from "../components/Production/RFTByTheHour";
import OutPutTheHour from "../components/Production/OutPutTheHour";
import PPHByTheHour from "../components/Production/PPHByTheHour";
import Top3Defect from "../components/Production/Top3Defect";
import ModelRun from "../components/Production/ModelRun";

import AnalyzerAttendance from "../components/Production/AnalyzerAttendance";
import AnalyzerTopLine from "../components/Production/AnalyzerTopLine";
import AnalyzerTotalOutput from "../components/Production/AnalyzerTotalOutput";
import AnalyzerTarget from "../components/Production/AnalyzerTaget";

const ProductionScreen = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [navigate, setNavigate] = useState({
    factory: FACTORY,
    floor: "",
    line: "",
    section: "",
  });
  const [date, setDate] = useState(dayjs(new Date()));

  const EFFICIENCY_BY_FLOOR = [
    { lineAlias: "AF1", efficiency: 70.2, target: 60.5 },
    { lineAlias: "AF2", efficiency: 65.9, target: 60.5 },
    { lineAlias: "AF4", efficiency: 71.2, target: 60.5 },
    { lineAlias: "BF2", efficiency: 74.1, target: 60.5 },
    { lineAlias: "CF2", efficiency: 68.5, target: 60.5 },
    { lineAlias: "DF1", efficiency: 67.2, target: 60.5 },
    { lineAlias: "DF3", efficiency: 74.1, target: 60.5 },
  ];

  const RFT_BY_FLOOR = [
    { lineAlias: "AF1", rft: 83.9, target: 90 },
    { lineAlias: "AF2", rft: 83.39, target: 90 },
    { lineAlias: "AF4", rft: 87.37, target: 90 },
    { lineAlias: "BF2", rft: 85.14, target: 90 },
    { lineAlias: "CF2", rft: 83.55, target: 90 },
    { lineAlias: "DF1", rft: 85.04, target: 90 },
    { lineAlias: "DF3", rft: 88.02, target: 90 },
  ];

  const stopLineList = [
    { lineAlias: "AF1", SL_NgungChuyen: 1 },
    { lineAlias: "AF2", SL_NgungChuyen: 0 },
    { lineAlias: "AF4", SL_NgungChuyen: 3 },
    { lineAlias: "BF2", SL_NgungChuyen: 1 },
    { lineAlias: "CF2", SL_NgungChuyen: 0 },
    { lineAlias: "DF1", SL_NgungChuyen: 0 },
    { lineAlias: "DF3", SL_NgungChuyen: 1 },
  ];

  let chartData = [
    { line: "AF1", stitching: 82.22, assembly: 334 },
    { line: "AF2", stitching: 595.0, assembly: 412 },
    { line: "AF4", stitching: 542.0, assembly: 430 },
    { line: "BF2", stitching: 560.0, assembly: 413 },
    { line: "CF2", stitching: 597.0, assembly: 388 },
    { line: "DF1", stitching: 587.0, assembly: 389 },
    { line: "DF3", stitching: 375.0, assembly: 371.0 },
  ];

  let tableData = [
    {
      line: "AF1",
      target: 1140,
      actual: {
        "7:30-8:30": 1120,
        "8:30-9:30": 1307,
        "9:30-10:30": 1150,
        "10:30-11:30": 1173,
        "12:30-13:30": 1301,
        "13:30-14:30": 1160,
      },
    },
    {
      line: "AF2",
      target: 1140,
      actual: {
        "7:30-8:30": 1214,
        "8:30-9:30": 1135,
        "9:30-10:30": 1206,
        "10:30-11:30": 1262,
        "12:30-13:30": 1146,
        "13:30-14:30": 1233,
      },
    },
    {
      line: "AF4",
      target: 950,
      actual: {
        "7:30-8:30": 969,
        "8:30-9:30": 1054,
        "9:30-10:30": 974,
        "10:30-11:30": 1015,
        "12:30-13:30": 951,
        "13:30-14:30": 996,
      },
    },
    {
      line: "BF2",
      target: 1330,
      actual: {
        "7:30-8:30": 1435,
        "8:30-9:30": 1420,
        "9:30-10:30": 1439,
        "10:30-11:30": 1515,
        "12:30-13:30": 1444,
        "13:30-14:30": 1493,
      },
    },
    {
      line: "CF2",
      target: 1330,
      actual: {
        "7:30-8:30": 1507,
        "8:30-9:30": 1486,
        "9:30-10:30": 1482,
        "10:30-11:30": 1425,
        "12:30-13:30": 1450,
        "13:30-14:30": 1480,
      },
    },
    {
      line: "DF1",
      target: 1140,
      actual: {
        "7:30-8:30": 1249,
        "8:30-9:30": 1299,
        "9:30-10:30": 1227,
        "10:30-11:30": 1164,
        "12:30-13:30": 1153,
        "13:30-14:30": 1285,
      },
    },
    {
      line: "DF3",
      target: 1320,
      actual: {
        "7:30-8:30": 1295,
        "8:30-9:30": 1492,
        "9:30-10:30": 1398,
        "10:30-11:30": 1304,
        "12:30-13:30": 1443,
        "13:30-14:30": 1326,
      },
    },
  ];

  let OUTPUT_BY_FLOOR = [
    { line: "AF1", actual: 7211, target: 9120, remaining: 1909 },
    { line: "AF2", actual: 7196, target: 9120, remaining: 1924 },
    { line: "AF4", actual: 5959, target: 7600, remaining: 1641 },
    { line: "BF2", actual: 8746, target: 10640, remaining: 1894 },
    { line: "CF2", actual: 8830, target: 10640, remaining: 1810 },
    { line: "DF1", actual: 7377, target: 9120, remaining: 1743 },
    { line: "DF3", actual: 8258, target: 10560, remaining: 2302 },
  ];

  let transformed_eff = transformedData_EFF(EFFICIENCY_BY_FLOOR);
  let transformed_rft = transformedData_RFT(RFT_BY_FLOOR);

  //Line
  const RFT_BY_THE_FLOOR = [
    {
      "07:30-08:30": 79.4,
      "08:30-09:30": 79.2,
      "09:30-10:30": 77.2,
      "10:30-11:30": 75.8,
      "11:30-12:30": 0,
      "12:30-13:30": 80.3,
      "13:30-14:30": 78.2,
      "14:30-15:30": 80.8,
      "15:30-16:30": 75,
    },
  ];

  const EFF_BY_THE_FLOOR = [
    {
      "07:30-08:30": 79.4,
      "08:30-09:30": 79.2,
      "09:30-10:30": 77.2,
      "10:30-11:30": 75.8,
      "11:30-12:30": 0,
      "12:30-13:30": 80.3,
      "13:30-14:30": 78.2,
      "14:30-15:30": 80.8,
      "15:30-16:30": 75,
    },
  ];

  const actualStitching = [
    {
      "07:30-08:30": 20,
      "08:30-09:30": 0,
    },
  ];

  const actualAssembly = [
    {
      "07:30-08:30": 50,
      "08:30-09:30": 50,
      "09:30-10:30": 50,
      "10:30-11:30": 77,
      "13:30-14:30": 62,
      "15:30-16:30": 224,
    },
  ];

  let OUTPUT_BY_THE_HOURS =
    navigate?.section === "stitching" ? actualStitching : actualAssembly;

  const worker = {
    stitching: 0,
    assembly: 55,
  };

  let WORKER =
    navigate?.section === "stitching" ? worker.stitching : worker.assembly;

  const target = {
    targetStitching: 0,
    targetAssembly: 1800,
  };

  const TARGET =
    navigate?.section === "stitching"
      ? target.targetStitching
      : target.targetAssembly;

  const SHOE_DATA = [
    {
      article: "IE2317",
      shoesName: "BRAVADA 2.0 MID PLATFORM",
      purchaseOrder: "FX",
      img: "http://192.168.0.96:5000/shoes-photos/IE2317.bmp",
      stitchingLc: "95.36",
      assemblyLc: "65.1",
      ry: "A2402-151",
    },
    {
      article: "IE2310",
      shoesName: "BRAVADA 2.0 PLATFORM",
      purchaseOrder: "P2",
      img: "http://192.168.0.96:5000/shoes-photos/IE2310.bmp",
      stitchingLc: "89.65",
      assemblyLc: "65.1",
      ry: "A2403-081",
    },
  ];

  const TOP3_DEFECT = [
    {
      Code: "500-3",
      NameVit: "HO KEO",
      NameEng: "BONDING GAP",
      Qty: 132,
      TQty: "31.28%",
      Picture:
        "http://192.168.30.19:5000/qip-defect-photos/laiyih_LHG240323061_31_500-2_2024323913102807.jpg",
      Action_Plan: null,
      RowNumber: "1",
    },
    {
      Code: "400-3",
      NameVit: "KEO CAO/LEM KEO HOAC LEM XU LI",
      NameEng: "OVER CEMENTING OR PRIMING",
      Qty: 64,
      TQty: "15.17%",
      Picture:
        "http://192.168.30.19:5000/qip-defect-photos/laiyih_LHG240323061_31_500-2_2024323913102807.jpg",
      Action_Plan: null,
      RowNumber: "2",
    },
    {
      Code: "400-1",
      NameVit: "NHIEM BAN ( VET DO)",
      NameEng: "CONTAMINATION(Stains)",
      Qty: 55,
      TQty: "13.03%",
      Picture:
        "http://192.168.30.19:5000/qip-defect-photos/laiyih_LHG240323061_31_500-2_2024323913102807.jpg",
      Action_Plan: null,
      RowNumber: "3",
    },
    {
      Code: "",
      NameVit: "Khác",
      NameEng: "Others",
      Qty: 171,
      TQty: "40.52%",
      Picture: "",
      Action_Plan: "",
      RowNumber: "4",
    },
  ];

  //Set Height
  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // SET FOR SLIDE 1
  const SET_FULL_SCREEN_LAPTOP =
    screenHeight > 730
      ? { height: `${screenHeight / 3 - 16}px` }
      : { height: "300px" };
  const SET_FULL_SCREEN_LAPTOP_ = {
    ...SET_FULL_SCREEN_LAPTOP,
    height: parseFloat(SET_FULL_SCREEN_LAPTOP.height) / 2 - 8,
  };

  // SET CHART
  const SET_HEIGHT_CHART =
    screenHeight > 730 ? screenHeight / 3 - 51 : 300 - 51;

  return (
    <Box component={"div"} className="production-screen">
      <Box
        component={"div"}
        sx={
          screenHeight > 730 && screenHeight < 780
            ? { position: "relative", height: `${screenHeight / 3}px` }
            : { position: "relative", height: "100%" }
        }
      >
        <Breadcrumb>Prod. KPI Dashboard</Breadcrumb>
        <Navigation
          navigate={navigate}
          setNavigate={setNavigate}
          date={date}
          setDate={setDate}
        />
      </Box>

      <Box component={"div"} className="production-screen-body">
        {navigate.line === "" ? (
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}
          >
            <Grid item xs={4}>
              <EFFByFloor
                customStyle={SET_FULL_SCREEN_LAPTOP}
                setHeightChart={SET_HEIGHT_CHART}
                header={"EFFICIENCY BY FLOOR"}
                type={"eff"}
                typeChart={"ColumnMixed"}
                data={transformed_eff}
              />
            </Grid>
            <Grid item xs={4}>
              <RFTByFloor
                customStyle={SET_FULL_SCREEN_LAPTOP}
                setHeightChart={SET_HEIGHT_CHART}
                header={"RFT BY FLOOR"}
                type={"rft"}
                typeChart={"ColumnMixed"}
                data={transformed_rft}
              />
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6}>
                  <AnalyzerTarget
                    customStyle={SET_FULL_SCREEN_LAPTOP_}
                    header={"EFFICIENCY"}
                    target={`BASE LINE: ${IS_TARGET_EFF_RFT.floor.eff}%`}
                    data={"70%"}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <AnalyzerTarget
                    customStyle={SET_FULL_SCREEN_LAPTOP_}
                    header={"EFT"}
                    target={`TARGET: ${IS_TARGET_EFF_RFT.floor.rft}%`}
                    data={"70%"}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <AnalyzerTotalOutput
                    customStyle={SET_FULL_SCREEN_LAPTOP_}
                    header={"TOTAL OUTPUT"}
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <AnalyzerTopLine
                    customStyle={SET_FULL_SCREEN_LAPTOP_}
                    header={"STOPLINE"}
                    data={stopLineList}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <OutPutByFloor
                customStyle={SET_FULL_SCREEN_LAPTOP}
                setHeightChart={SET_HEIGHT_CHART}
                header={"OUTPUT BY LINE"}
                data={OUTPUT_BY_FLOOR}
              />
            </Grid>
            <Grid item xs={4}>
              <HourlyOutputByFloor
                customStyle={SET_FULL_SCREEN_LAPTOP}
                setHeightTable={SET_HEIGHT_CHART}
                header={"HOURLY OUTPUT BY FLOOR"}
                data={tableData}
              />
            </Grid>
            <Grid item xs={4} sx={SET_FULL_SCREEN_LAPTOP}>
              <AttendanceByFloor
                customStyle={SET_FULL_SCREEN_LAPTOP}
                setHeightChart={SET_HEIGHT_CHART}
                header={"ATTENDANCE BY FLOOR"}
                data={chartData}
              />
            </Grid>
          </Grid>
        ) : (
          <Slick setDot={false} setArrow={true} swipe={true}>
            <div>
              <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}
              >
                <Grid item xs={4}>
                  <EFFByTheHour
                    customStyle={SET_FULL_SCREEN_LAPTOP}
                    setHeightChart={SET_HEIGHT_CHART}
                    header={"EFFICIENCY BY THE HOUR"}
                    type={"eff"}
                    section={navigate.section}
                    data={RFT_BY_THE_FLOOR}
                  />
                </Grid>
                <Grid item xs={4}>
                  <RFTByTheHour
                    customStyle={SET_FULL_SCREEN_LAPTOP}
                    setHeightChart={SET_HEIGHT_CHART}
                    header={"RFT BY THE HOUR"}
                    type={"rft"}
                    section={navigate.section}
                    data={EFF_BY_THE_FLOOR}
                  />
                </Grid>
                <Grid item xs={4}>
                  <ModelRun
                    customStyle={SET_FULL_SCREEN_LAPTOP}
                    header={"MODEL RUN BY LINE"}
                    targetStitching={target.targetStitching}
                    targetAssembly={target.targetAssembly}
                    data={SHOE_DATA}
                  />
                </Grid>
                <Grid item xs={4}>
                  <OutPutTheHour
                    customStyle={SET_FULL_SCREEN_LAPTOP}
                    setHeightChart={SET_HEIGHT_CHART}
                    header={"OUTPUT BY THE HOUR"}
                    target={TARGET}
                    plannedWorkingHours={8}
                    data={OUTPUT_BY_THE_HOURS}
                  />
                </Grid>
                <Grid item xs={4}>
                  <PPHByTheHour
                    customStyle={SET_FULL_SCREEN_LAPTOP}
                    setHeightChart={SET_HEIGHT_CHART}
                    header={"PPH BY THE HOUR"}
                    data={OUTPUT_BY_THE_HOURS}
                    worker={WORKER}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={6} md={6}>
                      <AnalyzerTarget
                        customStyle={SET_FULL_SCREEN_LAPTOP_}
                        header={"EFFICIENCY"}
                        target={`BASE LINE: ${IS_TARGET_EFF_RFT.floor.eff}%`}
                        data={"70%"}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <AnalyzerTarget
                        customStyle={SET_FULL_SCREEN_LAPTOP_}
                        header={"EFT"}
                        target={`TARGET: ${IS_TARGET_EFF_RFT.floor.rft}%`}
                        data={"70%"}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <AnalyzerTotalOutput
                        customStyle={SET_FULL_SCREEN_LAPTOP_}
                        header={"TOTAL OUTPUT"}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                      <AnalyzerAttendance
                        customStyle={SET_FULL_SCREEN_LAPTOP_}
                        header={"ATTENDANCE"}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}
              >
                <Grid item xs={12}>
                  <Top3Defect
                    header={"STOPLINE TOP 3 DEFECT"}
                    data={TOP3_DEFECT}
                    setHeightChart={SET_HEIGHT_CHART}
                  />
                </Grid>
              </Grid>
            </div>
          </Slick>
        )}
      </Box>
    </Box>
  );
};

export default ProductionScreen;
