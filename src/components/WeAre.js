import { Typography, createStyles, makeStyles } from "@material-ui/core";
import weAreImg from "../assets/images/weAre.webp";
import { APP_MAIN_COLOR, FONT_FAMILY } from "./constant/AppConstat";

const useStyles = makeStyles((theme) =>
  createStyles({
    weAre: {
      width: "100%",
      height: 600,
      backgroundImage: `url(${weAreImg})`,
      display: "grid",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      marginBottom: 10,
    },
    companyDetails: {
      display: "flex",
      flexDirection: "column",
      padding: "8px 30px",
      color: APP_MAIN_COLOR,
      fontFamily: FONT_FAMILY,
      "& .MuiTypography-h3": {
        textDecoration: "underline",
        fontFamily: FONT_FAMILY,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  })
);
export const WeAre = () => {
  const classes = useStyles();
  return (
    <div className={classes.weAre}>
      <div className={classes.companyDetails}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h3"
          component="div"
        >
          WE ARE
        </Typography>
        CB Control Systems is a cutting-edge startup dedicated to providing
        top-notch HVAC & BMS solutions and services. With a passion for customer
        satisfaction and a team of highly skilled professionals, we aim to
        become a leading player in the HVAC and BMS industry. Our core focus is
        on delivering efficient, sustainable, and cost-effective heating,
        ventilation, and air conditioning solutions to residential, commercial,
        and industrial clients.
      </div>
    </div>
  );
};
