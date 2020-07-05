import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import QRCode from "qrcode.react";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexDirection: "column",

    "& svg": {
      clear: "both",
      pageBreakBefore: "always",
    },
  },
  text: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default function Printed({ data }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {data.map((row, index) => {
        const encodedText = `${row.id},${row.nombres},${row.edad},${row.culto},${row.dia},${row.hora}`;
        return (
          <Grid item xs={3} key={row.id} className={classes.flex}>
            <QRCode value={encodedText} size={250} renderAs="svg" />
            <span className={classes.text}>{row.nombres}</span>
          </Grid>
        );
      })}
    </Grid>
  );
}
