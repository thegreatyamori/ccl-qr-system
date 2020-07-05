import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import { useSnackbar } from "notistack";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { UnauthorizedMobile } from "../shared/Unauthorized";
import { mobile } from "../shared/utils";
import QRIcon from "../shared/QRIcon";
import { useStyles } from "./styles";
// import ReactVirtualizedTable from "./Table";
// import Printed from "./Printed";
import SimpleTable from "./SimpleTable";
import ListButton from "../shared/Fab";

export default function Importcsv() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [csv, setCsv] = useState([]);
  const [data, setData] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleCsv = (data, fileInfo) => {
    setData(data);
    if (data.length !== 0) {
      setBtnDisabled(true);
      enqueueSnackbar("Datos cargados correctamente 😁", {
        variant: "info",
      });
    }
  };

  const handleErrorCsv = (error) => {
    enqueueSnackbar("Ocurrió un error al importar los datos 😔", { variant: "error" });
    console.log(error);
  };

  const handleLoad = () => setCsv(data);

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
    <UnauthorizedMobile text="Solo secretaria tiene acceso a este contenido!" />
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.w100}
                onClick={handleLoad}
                disabled={!btnDisabled}
                endIcon={<QRIcon />}
              >
                Carga los Datos y Genera el QR
              </Button>
            </Grid>
            <Grid item xs={12}>
              {/* <ReactVirtualizedTable data={csv} /> */}
              <SimpleTable data={csv} />
              {/* <Printed data={csv} /> */}
            </Grid>
          </Grid>
        </div>
      </div>
      <ListButton />
    </Container>
  );
}
