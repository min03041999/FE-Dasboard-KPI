import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

export default function DefectTable(props) {
  const {
    header,
    data,
    height = "100%",
    bgColor = "#337ab7",
    color = "#fff",
  } = props;

  return (
    <TableContainer sx={{ width: "100%", height: height }}>
      <Table size="small" stickyHeader>
        <TableHead>
          <TableRow>
            {header?.map((item, i) => (
              <TableCell
                key={i}
                style={{
                  minWidth: 100,
                  backgroundColor: bgColor,
                  color: color,
                }}
                sx={{ whiteSpace: "nowrap", paddingBottom: 0, paddingTop: 0 }}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i}>
              <TableCell
                padding={0}
                style={{
                  fontSize: 11,
                  textAlign: "center",
                  padding: 0,
                  fontWeight: "bold",
                }}
              >
                {item.SupplierName}
              </TableCell>
              <TableCell style={{ padding: 0 }}>
                <Box>
                  {item.Materials.map((material, i) => (
                    <Box key={i} display="flex">
                      <Box>
                        <LabelImportantIcon fontSize="small" />
                      </Box>
                      <Box fontSize={11} fontWeight={"bold"}>
                        {material.Material_Name}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </TableCell>
              <TableCell style={{ padding: 0 }}>
                {item.Defect.map((defect, i) => (
                  <Box key={i} display="flex">
                    <Box>
                      <LabelImportantIcon fontSize="small" />
                    </Box>
                    <Box fontSize={11} fontWeight={"bold"}>
                      {defect.Defect_Name}
                    </Box>
                  </Box>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
