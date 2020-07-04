import React from "react";
import QRCode from "qrcode.react";
import SaveIcon from "@material-ui/icons/Save";
import { Grid, TextField, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import Spinner from "./Spinner";

export default function Form({
  _handleChange,
  _handleSelect,
  _handleSubmit,
  values,
}) {
  const classes = useStyles();
  return (
    <form
      onSubmit={_handleSubmit}
      className={`${classes.form} ${classes.w100}`}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="nombres"
                name="nombres"
                variant="outlined"
                label="Nombres"
                onChange={_handleChange}
                value={values.nombres}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="lider"
                name="lider"
                variant="outlined"
                label="Lider"
                onChange={_handleChange}
                value={values.lider}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                autoComplete="edad"
                name="edad"
                variant="outlined"
                label="Edad"
                onChange={_handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                autoComplete="asiento"
                name="asiento"
                variant="outlined"
                label="Asiento"
                onChange={_handleChange}
                fullWidth
                required
              />
            </Grid>
            <Spinner onSelect={_handleSelect} />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <QRCode
            value={`${values.asiento},${values.nombres},${values.edad},${values.culto},${values.dia},${values.hora}`}
            id="qr"
            size={270}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            endIcon={<SaveIcon />}
          >
            Añadir
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
