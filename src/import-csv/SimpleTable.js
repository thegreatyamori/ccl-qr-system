import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import QRCode from "qrcode.react";
import { header } from "../shared/settings";
import { createAll } from "../db/Database";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  canvas: {
    display: "none",
  },
});

export default function SimpleTable({ data }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const rows = document.querySelectorAll("#assistant-row canvas#qr");
    if (rows.length !== 0) {
      let _rows = [];
      rows.forEach((row, index) => {
        const canvasDataUrl = row.toDataURL();
        _rows.push({
          ...data[index],
          asiento: data[index].id,
          qr: canvasDataUrl,
        });
      });

      // enviamos los datos a guardarse
      enqueueSnackbar("Procesando, espera un momento ...", { variant: "info" });
      createAll(_rows)
        .then((msg) => {
          enqueueSnackbar(msg, { variant: "success" });
        })
        .catch((msg) => {
          enqueueSnackbar(msg, { variant: "error" });
        });
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
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
          {data.map((row, index) => {
            const encodedText = `${row.id},${row.nombres},${row.edad},${row.culto},${row.dia},${row.hora}`;
            return (
              <TableRow key={index} id="assistant-row">
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.nombres}</TableCell>
                <TableCell align="right">{row.edad}</TableCell>
                <TableCell align="right">{row.culto}</TableCell>
                <TableCell align="right">{row.dia}</TableCell>
                <TableCell align="right">{row.hora}</TableCell>
                <TableCell align="right">
                  <QRCode
                    value={encodedText}
                    size={300}
                    renderAs="canvas"
                    id="qr"
                    className={classes.canvas}
                  />
                  <QRCode value={encodedText} size={70} renderAs="svg" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
