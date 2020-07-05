import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 16,
    paddingBottom: 56,
  },
  img: {
    width: "100%",
  },
  center: {
    textAlign: "center",
  },
  assistant: {
    color: theme.palette.secondary.main,
  },
  gridMargin: {
    margin: 0,
    width: "100%",
  },
  paper: {
    marginBottom: 10,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(8),
    right: theme.spacing(2),
  },
}));
