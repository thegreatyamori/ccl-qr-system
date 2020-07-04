import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from "./styles";
import FormControlled from "./withFormControlled";

export default function Addpeople() {
  const classes = useStyles();

  const handleSubmit = (formValues) => {
    alert(JSON.stringify(formValues));
  };

  return (
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
    </Container>
  );
}
