import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ScanIcon from "../ScanIcon";
import { BottomNavigationAction } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bottomRoot: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 1,
    background: theme.palette.primary.main,
  },
  root: {
    color: "#ffffff8a",
  },
  selected: {
    color: `${theme.palette.primary.contrastText} !important`,
  },
}));

const navigation = [
  { pathname: "/", label: "Verificar", icon: <ScanIcon /> },
  { pathname: "/new", label: "Asistente", icon: <GroupAddIcon /> },
  { pathname: "/import-csv", label: "Importar", icon: <PostAddIcon /> },
];

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(null);

  return (
    <BottomNavigation
      classes={{ root: classes.bottomRoot }}
      component="nav"
      value={value || location.pathname}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
    >
      {navigation.map((action) => (
        <BottomNavigationAction
          key={action.label}
          value={action.pathname}
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          label={action.label}
          icon={action.icon}
          onClick={() => history.replace({ pathname: action.pathname })}
        />
      ))}
    </BottomNavigation>
  );
}
