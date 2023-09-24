import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  copyRights: {
    padding: 20,
    color: "#fff",
    height: "auto",
    backgroundColor: "#1a1a1a",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    "& .main": {
      fontSize: 14,
    },
    "& .maintainedBy": {
      fontSize: 12,
    },
    [theme.breakpoints.down(800)]: {
      flexDirection: "column",
      padding: 10,
      fontSize: 10,
      gap: 0,
      "& .main": {
        fontSize: 10,
      },
      "& .maintainedBy": {
        fontSize: 8,
      },
    },
  },
}));

export const CopyRights = () => {
  const classes = useStyles({});
  return (
    <div className={classes.copyRights}>
      <Typography gutterBottom variant="h6" component="div" className="main">
        Copyrights © cbcontrolsystems. All Rights Reserved.
      </Typography>
    </div>
  );
};
