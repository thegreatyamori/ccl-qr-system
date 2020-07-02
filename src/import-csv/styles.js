const { makeStyles } = require("@material-ui/core");

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
  red: {
    color: theme.palette.error.dark,
  },
  green: {
    color: theme.palette.success.dark,
  },
  table: {
    minWidth: 650,
  },
  inputCsv: {
    width: "0.1px",
    height: "0.1px",
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: -1,
  },
  buttonCsv: {
    color: "white",
    background: theme.palette.success.main,
    cursor: "pointer",
    borderRadius: theme.shape.borderRadius,
    ...theme.typography.button,
    boxShadow: theme.shadows[2],
    "&:hover": {
      background: theme.palette.success.dark,
    },
  },
  labelCsv: {
    padding: theme.spacing(1),
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  labelContent: {
    display: "flex",
  },
  icon: {
    marginLeft: 8,
  }
}));
