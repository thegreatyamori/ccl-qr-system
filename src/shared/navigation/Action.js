import React from "react";
import { BottomNavigationAction, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#ffffff8a",
  },
  selected: {
    color: "#fff !important",
  },
}));

export default function Action({ icon, label, pathname }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <BottomNavigationAction
      classes={classes}
      label={label}
      icon={icon}
      onClick={() => history.replace({ pathname })}
    />
  );
}
