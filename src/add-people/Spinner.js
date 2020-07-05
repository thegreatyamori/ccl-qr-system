import React, { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { cultos } from "../shared/settings";
import { useStyles } from "./styles";

export default function Spinner({ onSelect, value }) {
  const classes = useStyles();
  const [culto, setCulto] = useState(value);

  const handleSelect = (e) => {
    const el = e.target.value;
    setCulto(el);
    if (el !== "") {
      const { isFull, ...rest } = cultos[el];
      onSelect(rest);
    }
  };

  useEffect(() => {
    if (value === "") {
      setCulto(value);
    }
  }, [value])

  return (
    <Grid item xs={12}>
      <FormControl variant="outlined" className={classes.w100}>
        <InputLabel id="simple-select">Culto *</InputLabel>
        <Select
          labelId="simple-select"
          id="simple-select"
          value={culto}
          onChange={handleSelect}
          label="Culto"
          required
        >
          {cultos.map((item) => (
            <MenuItem value={item.culto} key={item.culto}>
              {item.culto === "" ? (
                <em>Ninguno</em>
              ) : (
                <span className={item.isFull ? classes.red : classes.green}>
                  {item.dia}
                  {" - "}
                  <Typography variant="overline" display="inline">
                    {item.hora}
                  </Typography>
                </span>
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {"*"}
      <span className={classes.red}>Rojo: Lleno</span>
      {" - "}
      <span className={classes.green}>Verde: Disponible</span>
    </Grid>
  );
}
