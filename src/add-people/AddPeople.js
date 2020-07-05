import React, { useState } from "react";
import { useSnackbar } from "notistack";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UnauthorizedMobile } from "../shared/Unauthorized";
import FormControlled from "./withFormControlled";
import { mobile } from "../shared/utils";
import { useStyles } from "./styles";
import ListButton from "../shared/Fab";
import { formInitialState } from "../shared/settings";
import { create } from "../db/Database";

export default function Addpeople() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [resetForm, setResetForm] = useState(formInitialState);

  const handleSubmit = (formValues) => {
    // enviamos los datos a guardarse
    create(formValues)
      .then((msg) => {
        enqueueSnackbar(msg, { variant: "success" });
        setResetForm(formInitialState);
      })
      .catch((msg) => {
        enqueueSnackbar(msg, { variant: "error" });
      });
  };

  return mobile === "i" || mobile === "a" ? (
    <UnauthorizedMobile text="Solo secretaria tiene acceso a este contenido!" />
  ) : (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <span role="img" aria-labelledby="lentes">
            Registra un nuevo asistente 😎
          </span>
        </Typography>
        <FormControlled handleSubmit={handleSubmit} values={resetForm} />
      </div>
      <ListButton />
    </Container>
  );
}
