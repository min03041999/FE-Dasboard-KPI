import React, { useEffect, useState } from "react";
import Card from "../Card";
import Title from "../Title";

import Slick from "../Slick";
import { Grid, Stack, Typography } from "@mui/material";

import { useTranslation } from "react-i18next";

const ModelRun = (props) => {
  const { customStyle, header, data, targetStitching, targetAssembly, line } =
    props;

  const [modelRun, setModelRun] = useState([]);
  const [t] = useTranslation("global");

  useEffect(() => {
    const getDataLine = data?.find((item) => item.lineAlias === line);

    if (getDataLine) {
      setModelRun(getDataLine.shoesData);
    }
  }, [data, line]);

  return (
    <Card customStyle={customStyle}>
      <Title name={header} />
      <Slick setDot={true} setArrow={false} swipe={false}>
        {modelRun?.map((item, index) => (
          <div className="model-run" key={index}>
            <Grid container sx={{ width: "100%", height: `calc(100% - 35px)` }}>
              <Grid item xs={6} sm={6} md={6}>
                <Stack direction={{ xs: "row", sm: "row" }}>
                  <table style={{ borderCollapse: "collapse" }}>
                    <tbody>
                      <tr>
                        <th>
                          <Typography
                            className="model-run-title"
                            variant="caption"
                            display="block"
                          >
                            {t("production.model-run-by-line-model")}
                          </Typography>
                        </th>
                        <td>
                          <Typography
                            className="model-run-text"
                            variant="caption"
                            display="block"
                          >
                            {item.shoesName}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <Typography
                            className="model-run-title"
                            variant="caption"
                            display="block"
                          >
                            {t("production.model-run-by-line-article")}
                          </Typography>
                        </th>
                        <td>
                          <Typography
                            className="model-run-text"
                            variant="caption"
                            display="block"
                          >
                            {item.article}
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <Typography
                            className="model-run-title"
                            variant="caption"
                            display="block"
                          >
                            {t("production.model-run-by-line-labor-count")}
                          </Typography>
                        </th>
                        <td>
                          <Typography
                            className="model-run-text"
                            variant="caption"
                            display="block"
                          >{`${item.assemblyLc + item.stitchingLc} (S: ${
                            item.stitchingLc
                          }) | (A: ${item.assemblyLc})`}</Typography>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <Typography
                            className="model-run-title"
                            variant="caption"
                            display="block"
                          >
                            {t("production.model-run-by-line-hourly-target")}
                          </Typography>
                        </th>
                        <td>
                          <Typography
                            className="model-run-text"
                            variant="caption"
                            display="block"
                          >{`125 (S: ${targetStitching}) | (A: ${targetAssembly})`}</Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Stack>
                <div className="model-run-background">
                  <Typography
                    className="historical"
                    variant="caption"
                    display="block"
                  >
                    {" "}
                    {t("production.model-run-by-line-historical")}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <img src={item.img} alt={item.article} />
              </Grid>
            </Grid>
          </div>
        ))}
      </Slick>
    </Card>
  );
};

export default ModelRun;
