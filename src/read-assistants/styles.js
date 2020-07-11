import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 56,
  },
  w100: {
    width: "100%",
  },
  form: {
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: "1 1 100%",
  },
  labelContent: {
    display: "flex",
  },
  icon: {
    marginLeft: 8,
  },
  qr: {
    width: 60,
  }
}));
