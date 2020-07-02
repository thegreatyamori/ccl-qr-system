import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import doge from "./assets/img/doge.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    paddingBottom: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "right",
  },
  rootMobile: {
    marginTop: "50px",
    textAlign: "center",
  },
  img: {
    position: "absolute",
    bottom: 56,
    zIndex: -1,
  },
}));

export function UnauthorizedDesk({ text }) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.root}>
        <Typography variant="h1" component="h2">
          {text}
        </Typography>
      </div>
      <img src={doge} alt="Doge" className={classes.img} />
    </Container>
  );
}

export function UnauthorizedMobile({ text }) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.rootMobile}>
        <Typography variant="h3" component="h2">
          {text}
        </Typography>
      </div>
      <img src={doge} alt="Doge" className={classes.img} />
    </Container>
  );
}