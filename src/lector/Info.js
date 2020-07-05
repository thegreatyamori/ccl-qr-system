import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { labelData } from "../shared/settings";
import { useStyles } from "./styles";

export default function Info({ asistente }) {
  const classes = useStyles();

  const items = labelData.map((item) => (
    <Grid item xs={item.gridSize} key={item.key}>
      <Typography variant="h5" component="h2">
        {item.label}
      </Typography>
      <div className={classes.center}>
        <Typography variant="h4" component="span" className={classes.assistant}>
          {asistente[item.pos]}
        </Typography>
      </div>
    </Grid>
  ));

  const sections = [
    items.slice(2, 3),
    items.slice(3, 4),
    items.slice(4),
    items.slice(0, 2),
  ];

  return sections.map((section, index) => (
    <Paper elevation={3} className={classes.paper} key={index}>
      <Grid container spacing={3} className={classes.gridMargin}>
        {section}
      </Grid>
    </Paper>
  ));
}
