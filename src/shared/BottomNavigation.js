import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ScanIcon from "./ScanIcon";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    // background: theme.palette.primary.light
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Verificar"
        icon={<ScanIcon />}
        onClick={() => history.replace({ pathname: "/" })}
      />
      <BottomNavigationAction
        label="Asistente"
        icon={<GroupAddIcon />}
        onClick={() => history.replace({ pathname: "/new" })}
      />
      <BottomNavigationAction
        label="Importar"
        icon={<PostAddIcon />}
        onClick={() => history.replace({ pathname: "/import-csv" })}
      />
    </BottomNavigation>
  );
}
