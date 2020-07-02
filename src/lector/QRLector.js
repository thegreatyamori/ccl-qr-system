import React, { useState, useEffect } from "react";
import {
  Container,
  makeStyles,
  Button,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import { mobile } from "../shared/utils";
import { UnauthorizedDesk } from "../shared/Unauthorized";
import { labelData } from "../shared/settings";
import SimpleDialog from "./Dialog";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 16,
  },
  button: {
    width: "100%",
  },
  center: {
    textAlign: "center",
  },
  assistant: {
    color: theme.palette.secondary.main,
  },
  gridMargin: {
    margin: 0,
    width: "100%",
  },
}));

export default function Qrlector() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleCamera = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleData = (qr_data) => setData(qr_data.split(","));

  useEffect(() => {
    let [id, nombres, edad, culto, dia, hora] = data;
    console.log(id, nombres, edad, culto, dia, hora);
  }, [data]);

  // iOS | Android
  return mobile === "i" || mobile === "a" ? (
    <Container component="main" maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={handleCamera}
          >
            abre la camara
          </Button>
          <SimpleDialog
            open={open}
            onClose={handleClose}
            onCapture={handleData}
          />
        </Grid>
      </Grid>

      <Paper elevation={3}>
        <Grid container spacing={3} className={classes.gridMargin}>
          {labelData.map((item) => (
            <Grid item xs={item.gridSize} key={item.key}>
              <Typography variant="h5" component="h2">
                {item.label}
              </Typography>
              <div className={classes.center}>
                <Typography
                  variant="h4"
                  component="span"
                  className={classes.assistant}
                >
                  {item.key === "id"
                    ? data[0]
                    : item.key === "nombres"
                    ? data[1]
                    : item.key === "edad"
                    ? data[2]
                    : item.key === "culto"
                    ? data[3]
                    : item.key === "dia"
                    ? data[4]
                    : item.key === "hora"
                    ? data[5]
                    : ""}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  ) : (
    <UnauthorizedDesk text="Necesitas acceder desde un smartphone para ver el contenido !" />
  );
}
