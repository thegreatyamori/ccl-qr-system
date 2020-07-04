import React, { useState } from "react";
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

export default function Spinner({ onSelect }) {
  const classes = useStyles();
  const [culto, setCulto] = useState("");

  const handleSelect = (e) => {
    const el = e.target.value;
    const {isFull, ...rest} = cultos[el];
    setCulto(el);
    onSelect(rest);
  };

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
              <span className={item.isFull ? classes.red : classes.green}>
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
  );
}
