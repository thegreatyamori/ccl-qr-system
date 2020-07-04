import React, { useState } from "react";
import { Container, Fab } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { UnauthorizedDesk } from "../shared/Unauthorized";
import inst from "../shared/assets/img/instrucciones.png";
import { mobile } from "../shared/utils";
import SimpleDialog from "./Dialog";
import { useStyles } from "./styles";
import Info from "./Info";

export default function Qrlector() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleCamera = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleData = (qr_data) => setData(qr_data.split(","));

  // iOS | Android
  return mobile === "i" || mobile === "a" ? (
    <Container component="main" maxWidth="lg" className={classes.container}>
      {data.length === 0 ? (
        <img src={inst} alt="instrucciones" className={classes.img} />
      ) : (
        <Info asistente={data} />
      )}
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={handleCamera}
      >
        <CameraAltIcon />
      </Fab>
      <SimpleDialog open={open} onClose={handleClose} onCapture={handleData} />
    </Container>
  ) : (
    <UnauthorizedDesk text="Necesitas acceder desde un smartphone para ver el contenido !" />
  );
}
