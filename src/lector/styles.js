import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 16,
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
    position: "absolute",
    bottom: theme.spacing(8),
    right: theme.spacing(2),
  },
}));
