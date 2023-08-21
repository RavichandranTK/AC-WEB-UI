import { makeStyles } from "@material-ui/core";
import { Vision } from "../Vision";
import { Mission } from "../Mission";
import HandShake from "../../assets/images/handShake.jpg";

const useStyles = makeStyles((theme) => ({
  vmContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    margin: theme.spacing(5, 0),
    [theme.breakpoints.down(800)]: {
      flexDirection: "column",
    },
    "& img": {
      width: 250,
      height: 300,
    },
  },
}));

export const VisionMission = () => {
  const classes = useStyles({});
  return (
    <div className={classes.vmContainer}>
      <Vision/>
      <img
          alt="contact-us"
          src={HandShake}
          className={classes.handShake}
        ></img>
      <Mission/>
    </div>
  );
};
