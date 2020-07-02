import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import SimpleSnackbar from "../shared/SnackBar";
import QRIcon from "../shared/QRIcon";
import ReactVirtualizedTable from "./Table";
import {UnauthorizedMobile} from "../shared/Unauthorized";
import { useStyles } from "./styles";
import { mobile } from "../shared/utils";

export default function Importcsv() {
  const classes = useStyles();
  const [csv, setCsv] = useState([]);
  const [data, setData] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleCsv = (data, fileInfo) => {
    setData(data);
    handleDisabled(data);
  };

  const handleErrorCsv = (error) => {
    console.log(error);
  };

  const handleLoad = () => setCsv(data);
  const handleDisabled = (data) => setBtnDisabled(data.length === 0);

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  const labelContent = (
    <span className={classes.labelContent}>
      Elige el archivo de asistentes <FileCopyIcon className={classes.icon} />
    </span>
  );

  // iOS | Android
  return mobile === "i" || mobile === "a" ? (
    <UnauthorizedMobile text="Necesitas acceder desde un pc para ver el contenido !" />
  ) : (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <span role="img" aria-labelledby="lentes">
            Carga una lista de asistentes 📦
          </span>
        </Typography>
        <div className={`${classes.form} ${classes.w100}`}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CSVReader
                cssInputClass={classes.inputCsv}
                cssLabelClass={classes.labelCsv}
                cssClass={`${classes.buttonCsv} ${classes.w100}`}
                label={labelContent}
                onFileLoaded={handleCsv}
                onError={handleErrorCsv}
                parserOptions={papaparseOptions}
                inputId="csv"
              />
              <SimpleSnackbar
                isOpen={!btnDisabled}
                message="Datos Importados Correctamente 😁"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.w100}
                onClick={handleLoad}
                disabled={btnDisabled}
                endIcon={<QRIcon />}
              >
                Carga los Datos y Genera el QR
              </Button>
            </Grid>
            <Grid item xs={12}>
              <ReactVirtualizedTable data={csv} />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}