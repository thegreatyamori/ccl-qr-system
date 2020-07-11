import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UnauthorizedMobile } from "../shared/Unauthorized";
import { mobile } from "../shared/utils";
import { useStyles } from "./styles";
import SimpleTable from "./table/SimpleTable";

export default function Assistants() {
  const classes = useStyles();

  // iOS | Android
  return mobile === "i" || mobile === "a" ? (
    <UnauthorizedMobile text="Solo secretaria tiene acceso a este contenido!" />
  ) : (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <span role="img" aria-labelledby="lentes">
            Visualiza los asistentes 👀
          </span>
        </Typography>
        <div className={`${classes.form} ${classes.w100}`}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SimpleTable />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
