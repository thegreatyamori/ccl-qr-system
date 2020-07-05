import React from 'react'
import { Fab, makeStyles } from '@material-ui/core';
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

export const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(8),
    right: theme.spacing(2),
    zIndex: 2,
  },
}));

export default function ListButton() {
  const classes = useStyles();
  return (
    <Fab
      color="secondary"
      aria-label="add"
      className={classes.fab}
      disabled={true}
    >
      <LibraryBooksIcon />
    </Fab>
  );
}
