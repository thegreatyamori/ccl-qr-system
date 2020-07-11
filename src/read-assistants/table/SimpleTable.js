import React, { useState } from "react";
import { useSnackbar } from "notistack";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Toolbar, Typography } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { header } from "../../shared/settings";
import { all } from "../../db/Database";
import { useStyles } from "../styles.js";
import Filter from "./Filter";

export default function SimpleTable() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [culto, setCulto] = useState("");
  const [asistentes, setAsistentes] = useState([]);

  const handleCulto = (item) => {
    setCulto(`: Culto # ${item.culto} - ${item.dia} ${item.hora}`);

    enqueueSnackbar("Procesando, espera un momento ...", { variant: "info" });

    all(item.culto)
      .then((_data) => {
        // hay datos de ese culto?
        if (_data.length === 0) {
          enqueueSnackbar("No hay datos de este culto", { variant: "error" });
        } else {
          enqueueSnackbar("Datos Cargados", { variant: "success" });
          setAsistentes(_data);
        }
      })
      .catch((msg) => {
        enqueueSnackbar(msg, { variant: "error" });
      });
  };

  return (
    <Paper>
      <Toolbar className={classes.toolbar}>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Asistentes{culto}
        </Typography>
        <Filter onSelect={handleCulto} />
      </Toolbar>
      <TableContainer>
        <Table className={classes.table} size="small" aria-label="simple table">
          {asistentes.length === 0 &&
          <caption>
            Para visualizar la lista de asistentes haz click en{" "}
            <FilterListIcon /> y elige el culto.
          </caption>
          }
          <TableHead>
            <TableRow>
              {header.map((row) => (
                <TableCell
                  key={row.dataKey}
                  align={row.dataKey === "id" ? "left" : "right"}
                >
                  {row.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {asistentes.map((row, index) => {
                return (
                  <TableRow key={index} id="assistant-row">
                    <TableCell component="th" scope="row">
                      {row.asiento}
                    </TableCell>
                    <TableCell align="right">{row.nombres}</TableCell>
                    <TableCell align="right">{row.edad}</TableCell>
                    <TableCell align="right">{row.culto}</TableCell>
                    <TableCell align="right">{row.dia}</TableCell>
                    <TableCell align="right">{row.hora}</TableCell>
                    <TableCell align="right">
                      <img
                        src={row.qr}
                        alt={row.nombres}
                        className={classes.qr}
                      />
                    </TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
