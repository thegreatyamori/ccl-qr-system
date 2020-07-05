import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UnauthorizedMobile } from "../shared/Unauthorized";
import FormControlled from "./withFormControlled";
import { mobile } from "../shared/utils";
import { useStyles } from "./styles";
import ListButton from "../shared/Fab";
import { create } from "../db/Database";

export default function Addpeople() {
  const classes = useStyles();

  const handleSubmit = (formValues) => {
    // enviamos los datos a guardarse
    create(formValues);
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
        <FormControlled handleSubmit={handleSubmit} />
      </div>
      <ListButton />
    </Container>
  );
}
