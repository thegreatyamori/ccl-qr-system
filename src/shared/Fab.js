import React from 'react'
import { Fab, makeStyles } from '@material-ui/core';
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  return (
    <Fab
      color="secondary"
      aria-label="add"
      className={classes.fab}
      onClick={() => history.replace({ pathname: "/assistants" })}
    >
      <LibraryBooksIcon />
    </Fab>
  );
}
