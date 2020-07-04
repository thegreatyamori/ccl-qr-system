const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  w100: {
    width: "100%",
  },
  form: {
    marginTop: theme.spacing(3),
  },
  red: {
    color: "red",
  },
  green: {
    color: "green",
  },
}));
