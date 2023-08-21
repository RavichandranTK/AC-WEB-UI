import { Divider, Typography, makeStyles } from "@material-ui/core";
import { ReactComponent as MainLogo } from "../../src/assets/icons/mainLogo.svg";
import { APP_MAIN_COLOR, FONT_FAMILY } from "./constant/AppConstat";

const useStyles = makeStyles((theme) => ({
  details: {
    textAlign: "center",
    padding: "20px 100px",
    backgroundColor: "#fff",
    boxShadow: "inset 14px 14px 30px #bebebe, inset -14px -14px 30px #ffffff",
    [theme.breakpoints.down(616)]: {
      padding: "8px 10px",
    },
    "& .MuiTypography-h3": {
      color: APP_MAIN_COLOR,
    },
    "& .MuiDivider-root": {
      backgroundColor: APP_MAIN_COLOR,
      height: 4,
    },
    "& p": {
      fontFamily: FONT_FAMILY,
      marginTop: 10,
    },
  },
  detailsLogo: {
    width: "200px !important",
    height: "200px !important",
    padding: 10,
    "& path": {
      fill: APP_MAIN_COLOR,
    },
  },
}));

export const Details = () => {
  const classes = useStyles();
  return (
    <div className={classes.details}>
      <MainLogo className={classes.detailsLogo} />
      {/* <Typography variant="h3" component="p">
        CB Technology
      </Typography> */}
      <Divider />
      <Typography variant="h5" component="p">
        Buildings contribute to over 40% of the total energy use, and nearly 40%
        of this energy use is towards HVAC. With the world moving towards
        sustainable, energy effecient alternatives, it is imperative for the
        HVAC industry to constantly innovate.
      </Typography>
      <Typography variant="h5" component="p">
        We offer end to end HVAC and Electromechanical solutions and services
        for a wide spectrum of clientele spanning across various segments and
        sectors that helps in making life easier and bettering the future a
        leading name in the HVAC sector ABS has provided solutions to some of
        the globally renowned corporations and is now foraying into the MEP
        segment, to be a complete solution provider.
      </Typography>
    </div>
  );
};
