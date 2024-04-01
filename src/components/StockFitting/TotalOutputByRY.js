import React from 'react';
import Card from '../Card';
import Title from '../Title';
import DataTable from '../DataTable';

const TotalOutputByRY = (props) => {
    const { customStyle, header } = props;

    const setHeightTable = { ...customStyle, height: parseFloat(parseInt(customStyle.height, 10) - 40) };
    const HEADER_TABLE = ["RY", "ART", "MODEL NAME", "LINE", "PROD DATE", "TARGET", "DONE", "ONGOING"];

    const DATA = [
        {
            "SCBH": "AH2402-839",
            "ARTICLE": "IH8357",
            "XieMing": "D.O.N. ISSUE 5 C",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-28T00:00:00.000Z",
            "PlanQty": 170,
            "OntimeQty": 168,
            "LackQty": 2
        },
        {
            "SCBH": "AH2402-840",
            "ARTICLE": "IH8351",
            "XieMing": "D.O.N. ISSUE 5 J",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-27T00:00:00.000Z",
            "PlanQty": 290,
            "OntimeQty": 288,
            "LackQty": 2
        },
        {
            "SCBH": "AH2402-841",
            "ARTICLE": "IH8345",
            "XieMing": "SM D.O.N. ISSUE 5",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-25T00:00:00.000Z",
            "PlanQty": 530,
            "OntimeQty": 528,
            "LackQty": 2
        },
        {
            "SCBH": "AH2402-E98",
            "ARTICLE": "IH7720",
            "XieMing": "CRAZYFLIGHT 5 M MID",
            "LEAN": "B_L05",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 485,
            "OntimeQty": 480,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-622",
            "ARTICLE": "IF9262",
            "XieMing": "CRAZYFLIGHT 5 W",
            "LEAN": "B_L05",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 266,
            "OntimeQty": 260,
            "LackQty": 6
        },
        {
            "SCBH": "AH2403-794",
            "ARTICLE": "IH8345",
            "XieMing": "SM D.O.N. ISSUE 5",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-25T00:00:00.000Z",
            "PlanQty": 270,
            "OntimeQty": 267,
            "LackQty": 3
        },
        {
            "SCBH": "AH2403-896",
            "ARTICLE": "ID1252",
            "XieMing": "COURT 24",
            "LEAN": "D1_L04",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 150,
            "OntimeQty": 145,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-898",
            "ARTICLE": "ID1253",
            "XieMing": "COURT 24",
            "LEAN": "D1_L01",
            "PSDT": "2024-03-21T00:00:00.000Z",
            "PlanQty": 600,
            "OntimeQty": 596,
            "LackQty": 4
        },
        {
            "SCBH": "AH2403B003",
            "ARTICLE": "IZ5843",
            "XieMing": "COURT 24",
            "LEAN": "D1_L04",
            "PSDT": "2024-03-23T00:00:00.000Z",
            "PlanQty": 3397,
            "OntimeQty": 3393,
            "LackQty": 4
        },
        {
            "SCBH": "AH2403B004",
            "ARTICLE": "IZ5851",
            "XieMing": "COURT 24",
            "LEAN": "D1_L04",
            "PSDT": "2024-04-02T00:00:00.000Z",
            "PlanQty": 1971,
            "OntimeQty": 1964,
            "LackQty": 7
        },
        {
            "SCBH": "AH2403-B32",
            "ARTICLE": "IG9103",
            "XieMing": "D.O.N. ISSUE 6 TEAM",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 439,
            "OntimeQty": 435,
            "LackQty": 4
        },
        {
            "SCBH": "AH2403-F72",
            "ARTICLE": "GZ0069",
            "XieMing": "LIGRA 7 M",
            "LEAN": "A_L11",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 108,
            "OntimeQty": 90,
            "LackQty": 18
        },
        {
            "SCBH": "AH2403-F73",
            "ARTICLE": "GZ0069",
            "XieMing": "LIGRA 7 M",
            "LEAN": "A_L11",
            "PSDT": "2024-03-25T00:00:00.000Z",
            "PlanQty": 235,
            "OntimeQty": 204,
            "LackQty": 31
        },
        {
            "SCBH": "AH2403-F75",
            "ARTICLE": "FZ4660",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-03-26T00:00:00.000Z",
            "PlanQty": 189,
            "OntimeQty": 172,
            "LackQty": 17
        },
        {
            "SCBH": "AH2403-F77",
            "ARTICLE": "FZ4660",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-03-26T00:00:00.000Z",
            "PlanQty": 198,
            "OntimeQty": 172,
            "LackQty": 26
        },
        {
            "SCBH": "AH2403-F83",
            "ARTICLE": "IE7792",
            "XieMing": "DAME CERTIFIED 2",
            "LEAN": "D1_L03",
            "PSDT": "2024-03-28T00:00:00.000Z",
            "PlanQty": 644,
            "OntimeQty": 620,
            "LackQty": 24
        },
        {
            "SCBH": "AH2403-G11",
            "ARTICLE": "IE0545",
            "XieMing": "CRAZYFLIGHT 5 M",
            "LEAN": "B_L05",
            "PSDT": "2024-03-26T00:00:00.000Z",
            "PlanQty": 200,
            "OntimeQty": 195,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-G58",
            "ARTICLE": "IE0840",
            "XieMing": "COURT FLIGHT",
            "LEAN": "D3_L07",
            "PSDT": "2024-03-20T00:00:00.000Z",
            "PlanQty": 2500,
            "OntimeQty": 2255,
            "LackQty": 245
        },
        {
            "SCBH": "AH2403-G62",
            "ARTICLE": "ID8565",
            "XieMing": "ADIZERO UBERSONIC 4.1 M",
            "LEAN": "A_L09",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 185,
            "OntimeQty": 177,
            "LackQty": 8
        },
        {
            "SCBH": "AH2403-G66",
            "ARTICLE": "GZ0069",
            "XieMing": "LIGRA 7 M",
            "LEAN": "A_L11",
            "PSDT": "2024-03-26T00:00:00.000Z",
            "PlanQty": 300,
            "OntimeQty": 286,
            "LackQty": 14
        },
        {
            "SCBH": "AH2403-H27",
            "ARTICLE": "IG9088",
            "XieMing": "D.O.N. ISSUE 6",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-19T00:00:00.000Z",
            "PlanQty": 511,
            "OntimeQty": 503,
            "LackQty": 8
        },
        {
            "SCBH": "AH2403-H40",
            "ARTICLE": "ID1566",
            "XieMing": "ADIZERO UBERSONIC 4.1 W",
            "LEAN": "A_L09",
            "PSDT": "2024-03-27T00:00:00.000Z",
            "PlanQty": 100,
            "OntimeQty": 95,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-H42",
            "ARTICLE": "GY7648",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-03-28T00:00:00.000Z",
            "PlanQty": 117,
            "OntimeQty": 78,
            "LackQty": 39
        },
        {
            "SCBH": "AH2403-H50",
            "ARTICLE": "IG1734",
            "XieMing": "CRAZYFLIGHT 5 M",
            "LEAN": "B_L05",
            "PSDT": "2024-03-27T00:00:00.000Z",
            "PlanQty": 273,
            "OntimeQty": 271,
            "LackQty": 2
        },
        {
            "SCBH": "AH2403-H51",
            "ARTICLE": "ID5722",
            "XieMing": "CRAZYFLIGHT 5 W",
            "LEAN": "B_L05",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 695,
            "OntimeQty": 685,
            "LackQty": 10
        },
        {
            "SCBH": "AH2403-H54",
            "ARTICLE": "IH0524",
            "XieMing": "COURT 24",
            "LEAN": "D1_L01",
            "PSDT": "2024-03-27T00:00:00.000Z",
            "PlanQty": 817,
            "OntimeQty": 810,
            "LackQty": 7
        },
        {
            "SCBH": "AH2403-H74",
            "ARTICLE": "IG1609",
            "XieMing": "NOVAFLIGHT 2 W",
            "LEAN": "A_L08",
            "PSDT": "2024-03-20T00:00:00.000Z",
            "PlanQty": 105,
            "OntimeQty": 97,
            "LackQty": 8
        },
        {
            "SCBH": "AH2403-I09",
            "ARTICLE": "FZ4658",
            "XieMing": "LIGRA 7 M",
            "LEAN": "A_L11",
            "PSDT": "2024-03-21T00:00:00.000Z",
            "PlanQty": 52,
            "OntimeQty": 40,
            "LackQty": 12
        },
        {
            "SCBH": "AH2403-I10",
            "ARTICLE": "GZ0069",
            "XieMing": "LIGRA 7 M",
            "LEAN": "A_L11",
            "PSDT": "2024-03-25T00:00:00.000Z",
            "PlanQty": 53,
            "OntimeQty": 45,
            "LackQty": 8
        },
        {
            "SCBH": "AH2403-I11",
            "ARTICLE": "GZ0069",
            "XieMing": "LIGRA 7 M",
            "LEAN": "A_L11",
            "PSDT": "2024-03-25T00:00:00.000Z",
            "PlanQty": 633,
            "OntimeQty": 620,
            "LackQty": 13
        },
        {
            "SCBH": "AH2403-I12",
            "ARTICLE": "GZ0069",
            "XieMing": "LIGRA 7 M",
            "LEAN": "A_L11",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 461,
            "OntimeQty": 460,
            "LackQty": 1
        },
        {
            "SCBH": "AH2403-I13",
            "ARTICLE": "FZ4660",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-03-26T00:00:00.000Z",
            "PlanQty": 215,
            "OntimeQty": 205,
            "LackQty": 10
        },
        {
            "SCBH": "AH2403-I14",
            "ARTICLE": "FZ4660",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-03-27T00:00:00.000Z",
            "PlanQty": 611,
            "OntimeQty": 587,
            "LackQty": 24
        },
        {
            "SCBH": "AH2403-I15",
            "ARTICLE": "FZ4660",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-03-27T00:00:00.000Z",
            "PlanQty": 220,
            "OntimeQty": 213,
            "LackQty": 7
        },
        {
            "SCBH": "AH2403-J09",
            "ARTICLE": "IF9262",
            "XieMing": "CRAZYFLIGHT 5 W",
            "LEAN": "B_L05",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 377,
            "OntimeQty": 367,
            "LackQty": 10
        },
        {
            "SCBH": "AH2403-J10",
            "ARTICLE": "IG1612",
            "XieMing": "CRAZYFLIGHT 5 W",
            "LEAN": "B_L05",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 103,
            "OntimeQty": 70,
            "LackQty": 33
        },
        {
            "SCBH": "AH2403-J11",
            "ARTICLE": "IG1612",
            "XieMing": "CRAZYFLIGHT 5 W",
            "LEAN": "B_L05",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 525,
            "OntimeQty": 520,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-J80",
            "ARTICLE": "GY7648",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-03-28T00:00:00.000Z",
            "PlanQty": 124,
            "OntimeQty": 115,
            "LackQty": 9
        },
        {
            "SCBH": "AH2403-J81",
            "ARTICLE": "GY7648",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-03-28T00:00:00.000Z",
            "PlanQty": 293,
            "OntimeQty": 290,
            "LackQty": 3
        },
        {
            "SCBH": "AH2403-J82",
            "ARTICLE": "GY7648",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-03-28T00:00:00.000Z",
            "PlanQty": 361,
            "OntimeQty": 286,
            "LackQty": 75
        },
        {
            "SCBH": "AH2403-J96",
            "ARTICLE": "JH9610",
            "XieMing": "CAMPUS 00S",
            "LEAN": "D3_L05",
            "PSDT": "2024-03-23T00:00:00.000Z",
            "PlanQty": 6340,
            "OntimeQty": 6334,
            "LackQty": 6
        },
        {
            "SCBH": "AH2403-K00",
            "ARTICLE": "JH9613",
            "XieMing": "CAMPUS 00S",
            "LEAN": "D1_L06",
            "PSDT": "2024-03-28T00:00:00.000Z",
            "PlanQty": 900,
            "OntimeQty": 895,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-K02",
            "ARTICLE": "JH9613",
            "XieMing": "CAMPUS 00S",
            "LEAN": "C_L01",
            "PSDT": "2024-03-25T00:00:00.000Z",
            "PlanQty": 8570,
            "OntimeQty": 8565,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-K42",
            "ARTICLE": "IH7720",
            "XieMing": "CRAZYFLIGHT 5 M MID",
            "LEAN": "B_L05",
            "PSDT": "2024-03-23T00:00:00.000Z",
            "PlanQty": 274,
            "OntimeQty": 266,
            "LackQty": 8
        },
        {
            "SCBH": "AH2403-K43",
            "ARTICLE": "IH7720",
            "XieMing": "CRAZYFLIGHT 5 M MID",
            "LEAN": "B_L05",
            "PSDT": "2024-03-25T00:00:00.000Z",
            "PlanQty": 148,
            "OntimeQty": 134,
            "LackQty": 14
        },
        {
            "SCBH": "AH2403-K46",
            "ARTICLE": "IH7720",
            "XieMing": "CRAZYFLIGHT 5 M MID",
            "LEAN": "B_L05",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 120,
            "OntimeQty": 110,
            "LackQty": 10
        },
        {
            "SCBH": "AH2403-K49",
            "ARTICLE": "ID5722",
            "XieMing": "CRAZYFLIGHT 5 W",
            "LEAN": "B_L05",
            "PSDT": "2024-03-28T00:00:00.000Z",
            "PlanQty": 1587,
            "OntimeQty": 1582,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-K51",
            "ARTICLE": "IG1613",
            "XieMing": "CRAZYFLIGHT 5 W",
            "LEAN": "B_L05",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 215,
            "OntimeQty": 210,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-K58",
            "ARTICLE": "JH6235",
            "XieMing": "D.O.N. ISSUE 6 J",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-18T00:00:00.000Z",
            "PlanQty": 398,
            "OntimeQty": 394,
            "LackQty": 4
        },
        {
            "SCBH": "AH2403-K90",
            "ARTICLE": "GZ0069",
            "XieMing": "LIGRA 7 M",
            "LEAN": "A_L11",
            "PSDT": "2024-03-25T00:00:00.000Z",
            "PlanQty": 220,
            "OntimeQty": 215,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-L05",
            "ARTICLE": "JH6235",
            "XieMing": "D.O.N. ISSUE 6 J",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 300,
            "OntimeQty": 130,
            "LackQty": 170
        },
        {
            "SCBH": "AH2403-L10",
            "ARTICLE": "IE3141",
            "XieMing": "PUIG",
            "LEAN": "A_L06",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 67,
            "OntimeQty": 60,
            "LackQty": 7
        },
        {
            "SCBH": "AH2403-L14",
            "ARTICLE": "ID1254",
            "XieMing": "COURT 24",
            "LEAN": "D1_L01",
            "PSDT": "2024-03-19T00:00:00.000Z",
            "PlanQty": 597,
            "OntimeQty": 595,
            "LackQty": 2
        },
        {
            "SCBH": "AH2403-L15",
            "ARTICLE": "ID1254",
            "XieMing": "COURT 24",
            "LEAN": "D1_L01",
            "PSDT": "2024-03-20T00:00:00.000Z",
            "PlanQty": 640,
            "OntimeQty": 635,
            "LackQty": 5
        },
        {
            "SCBH": "AH2403-L21",
            "ARTICLE": "IF1656",
            "XieMing": "COURT 24",
            "LEAN": "D1_L04",
            "PSDT": "2024-03-21T00:00:00.000Z",
            "PlanQty": 560,
            "OntimeQty": 550,
            "LackQty": 10
        },
        {
            "SCBH": "AH2403-L22",
            "ARTICLE": "IF1656",
            "XieMing": "COURT 24",
            "LEAN": "D1_L04",
            "PSDT": "2024-03-26T00:00:00.000Z",
            "PlanQty": 300,
            "OntimeQty": 233,
            "LackQty": 67
        },
        {
            "SCBH": "AH2403-L29",
            "ARTICLE": "IG9156",
            "XieMing": "CAMPUS 00S J",
            "LEAN": "A_L04",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 2000,
            "OntimeQty": 1960,
            "LackQty": 40
        },
        {
            "SCBH": "AH2403SP030",
            "ARTICLE": "IF9637",
            "XieMing": "CAMPUS 00S W",
            "LEAN": "D3_L03",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 914,
            "OntimeQty": 910,
            "LackQty": 4
        },
        {
            "SCBH": "AH2403SP036",
            "ARTICLE": "H03471",
            "XieMing": "CAMPUS 00S",
            "LEAN": "D3_L07",
            "PSDT": "2024-04-20T00:00:00.000Z",
            "PlanQty": 500,
            "OntimeQty": 480,
            "LackQty": 20
        },
        {
            "SCBH": "AH2403SP041",
            "ARTICLE": "GY0042",
            "XieMing": "CAMPUS 00S W",
            "LEAN": "D1_L06",
            "PSDT": "2024-04-01T00:00:00.000Z",
            "PlanQty": 1851,
            "OntimeQty": 1796,
            "LackQty": 55
        },
        {
            "SCBH": "AH2403SP043",
            "ARTICLE": "IF9637",
            "XieMing": "CAMPUS 00S W",
            "LEAN": "D3_L03",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 860,
            "OntimeQty": 850,
            "LackQty": 10
        },
        {
            "SCBH": "AH2403SP046",
            "ARTICLE": "GY0042",
            "XieMing": "CAMPUS 00S W",
            "LEAN": "D1_L06",
            "PSDT": "2024-04-04T00:00:00.000Z",
            "PlanQty": 348,
            "OntimeQty": 312,
            "LackQty": 36
        },
        {
            "SCBH": "AH2404-111",
            "ARTICLE": "IG6640",
            "XieMing": "CROSS EM UP SELECT J",
            "LEAN": "D3_L07",
            "PSDT": "2024-03-14T00:00:00.000Z",
            "PlanQty": 2487,
            "OntimeQty": 2484,
            "LackQty": 3
        },
        {
            "SCBH": "AH2404-133",
            "ARTICLE": "IH3047",
            "XieMing": "GRAND COURT PLATFORM",
            "LEAN": "D1_L03",
            "PSDT": "2024-03-09T00:00:00.000Z",
            "PlanQty": 2250,
            "OntimeQty": 2245,
            "LackQty": 5
        },
        {
            "SCBH": "AH2404-195",
            "ARTICLE": "IE1089",
            "XieMing": "GRAND COURT PLATFORM",
            "LEAN": "D1_L01",
            "PSDT": "2024-02-19T00:00:00.000Z",
            "PlanQty": 4287,
            "OntimeQty": 4284,
            "LackQty": 3
        },
        {
            "SCBH": "AH2404-205",
            "ARTICLE": "GY0042",
            "XieMing": "CAMPUS 00S W",
            "LEAN": "D1_L06",
            "PSDT": "2024-04-02T00:00:00.000Z",
            "PlanQty": 990,
            "OntimeQty": 950,
            "LackQty": 40
        },
        {
            "SCBH": "AH2404-213",
            "ARTICLE": "JI4545",
            "XieMing": "COURT 24",
            "LEAN": "D1_L04",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 310,
            "OntimeQty": 305,
            "LackQty": 5
        },
        {
            "SCBH": "AH2404-224",
            "ARTICLE": "JI4545",
            "XieMing": "COURT 24",
            "LEAN": "D1_L04",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 300,
            "OntimeQty": 297,
            "LackQty": 3
        },
        {
            "SCBH": "AH2404-226",
            "ARTICLE": "JH8969",
            "XieMing": "D.O.N. ISSUE 6",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 211,
            "OntimeQty": 209,
            "LackQty": 2
        },
        {
            "SCBH": "AH2404-240",
            "ARTICLE": "IG9102",
            "XieMing": "D.O.N. ISSUE 6 TEAM",
            "LEAN": "D1_L05",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 323,
            "OntimeQty": 318,
            "LackQty": 5
        },
        {
            "SCBH": "AH2404-283",
            "ARTICLE": "GY7648",
            "XieMing": "LIGRA 7 W",
            "LEAN": "A_L11",
            "PSDT": "2024-04-12T00:00:00.000Z",
            "PlanQty": 221,
            "OntimeQty": 163,
            "LackQty": 58
        },
        {
            "SCBH": "AH2404-305",
            "ARTICLE": "GY0042",
            "XieMing": "CAMPUS 00S W",
            "LEAN": "D1_L06",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 108,
            "OntimeQty": 100,
            "LackQty": 8
        },
        {
            "SCBH": "AH2404-323",
            "ARTICLE": "ID7039",
            "XieMing": "CAMPUS 00S W",
            "LEAN": "D3_L03",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 300,
            "OntimeQty": 290,
            "LackQty": 10
        },
        {
            "SCBH": "AH2404-337",
            "ARTICLE": "H03472",
            "XieMing": "CAMPUS 00S",
            "LEAN": "A1_G01",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 1280,
            "OntimeQty": 1220,
            "LackQty": 60
        },
        {
            "SCBH": "AH2404-358",
            "ARTICLE": "H03471",
            "XieMing": "CAMPUS 00S",
            "LEAN": "D3_G06",
            "PSDT": "2024-03-12T00:00:00.000Z",
            "PlanQty": 2883,
            "OntimeQty": 2880,
            "LackQty": 3
        },
        {
            "SCBH": "AH2404-364",
            "ARTICLE": "GY0042",
            "XieMing": "CAMPUS 00S W",
            "LEAN": "D1_L06",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 1000,
            "OntimeQty": 960,
            "LackQty": 40
        },
        {
            "SCBH": "AH2404-402",
            "ARTICLE": "ID7039",
            "XieMing": "CAMPUS 00S W",
            "LEAN": "D3_L03",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 385,
            "OntimeQty": 360,
            "LackQty": 25
        },
        {
            "SCBH": "AH2404-427",
            "ARTICLE": "ID3667",
            "XieMing": "NOVAFLIGHT 2 M",
            "LEAN": "A_L08",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 17,
            "OntimeQty": 10,
            "LackQty": 7
        },
        {
            "SCBH": "AH2404-432",
            "ARTICLE": "ID5725",
            "XieMing": "CRAZYFLIGHT 5 W MID",
            "LEAN": "B_L05",
            "PSDT": "2024-04-01T00:00:00.000Z",
            "PlanQty": 496,
            "OntimeQty": 474,
            "LackQty": 22
        },
        {
            "SCBH": "AH2404-433",
            "ARTICLE": "ID3667",
            "XieMing": "NOVAFLIGHT 2 M",
            "LEAN": "A_L08",
            "PSDT": "2024-03-22T00:00:00.000Z",
            "PlanQty": 341,
            "OntimeQty": 308,
            "LackQty": 33
        },
        {
            "SCBH": "AH2404-436",
            "ARTICLE": "HQ8707",
            "XieMing": "CAMPUS 00S",
            "LEAN": "A_L02",
            "PSDT": "2024-04-01T00:00:00.000Z",
            "PlanQty": 180,
            "OntimeQty": 150,
            "LackQty": 30
        },
        {
            "SCBH": "AH2404-437",
            "ARTICLE": "IH8071",
            "XieMing": "CAMPUS 00S",
            "LEAN": "D3_L01",
            "PSDT": "2024-03-29T00:00:00.000Z",
            "PlanQty": 1143,
            "OntimeQty": 1139,
            "LackQty": 4
        },
        {
            "SCBH": "AH2404-441",
            "ARTICLE": "IE0545",
            "XieMing": "CRAZYFLIGHT 5 M",
            "LEAN": "B_L05",
            "PSDT": "2024-04-04T00:00:00.000Z",
            "PlanQty": 292,
            "OntimeQty": 285,
            "LackQty": 7
        },
        {
            "SCBH": "AH2404-449",
            "ARTICLE": "IE1102",
            "XieMing": "GRAND COURT PLATFORM",
            "LEAN": "D1_L02",
            "PSDT": "2024-04-27T00:00:00.000Z",
            "PlanQty": 1390,
            "OntimeQty": 1368,
            "LackQty": 22
        },
    ]

    return (
        <Card customStyle={customStyle}>
            <Title name={header} />

            <DataTable header={HEADER_TABLE} data={DATA} height={setHeightTable} customTableHeadStyle={{ backgroundColor: "#337ab7", color: "#fff", padding: "5px" }} customTextStyle={{ color: "#049962", fontSize: "10px" }} />
        </Card>
    )
}

export default TotalOutputByRY;