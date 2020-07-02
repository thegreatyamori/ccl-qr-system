import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { cultos } from "../shared/settings";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  w100: {
    width: "100%",
  },
  form: {
    marginTop: theme.spacing(3),
  },
  red: {
    color: "red",
  },
  green: {
    color: "green",
  },
}));

export default function Addpeople() {
  const classes = useStyles();
  const [culto, setCulto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (event) => {
    setCulto(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <span role="img" aria-labelledby="lentes  ">
            Registra un nuevo asistente 😎
          </span>
        </Typography>
        <form
          className={`${classes.form} ${classes.w100}`}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                id="firstName"
                label="Nombres"
                autoFocus
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="lname"
                name="lastName"
                variant="outlined"
                id="lastName"
                label="Apellidos"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.w100}>
                <InputLabel id="simple-select">Culto *</InputLabel>
                <Select
                  labelId="simple-select"
                  id="simple-select"
                  value={culto}
                  onChange={handleChange}
                  label="Culto"
                  required
                >
                  {cultos.map((item) => (
                    <MenuItem value={item.id} key={item.id}>
                      <span
                        className={item.isFull ? classes.red : classes.green}
                      >
                        {item.dia}
                        {" - "}
                        <Typography variant="overline" display="inline">
                          {item.hora}
                        </Typography>
                      </span>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {"*"}
              <span className={classes.red}>Rojo: Lleno</span>
              {" - "}
              <span className={classes.green}>Verde: Disponible</span>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.w100}
                endIcon={<SaveIcon />}
              >
                Añadir
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
