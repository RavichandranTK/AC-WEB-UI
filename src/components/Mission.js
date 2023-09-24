import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import mission from "../assets/images/mission.jpeg";
import { makeStyles } from "@material-ui/core";
import { APP_MAIN_COLOR } from "./constant/AppConstat";

const useStyles = makeStyles((theme) => ({
  mission: {
    margin: theme.spacing(5, "auto"),
    borderRadius: 20,
    border: `2px solid ${APP_MAIN_COLOR}`,
    "&:hover": {
      transform: "scale(1.2)",
      boxShadow:
        "16px 16px 6px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    },
    "& .MuiCardActionArea-root": {
      width: "100%",
      height: "100%",
      maxHeight: 400,
      maxWidth: 600,
      padding: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      [theme.breakpoints.down(800)]: {
        maxHeight: 300,
        maxWidth: 800,
      },
    },
    "& .MuiCardContent-root": {
      maxHeight: 150,
      overflow: "auto",
      // "&:hover": {
      //   overflow: "auto",
      // },
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#c1c7d7",
        borderRadius: "25px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    },
    "& .MuiCardMedia-img": {
      // objectFit: "unset",
      // maxHeight: 150,
      // maxWidth: 350,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "flex",
      justifyContent: "center",
      borderRadius: 30,
      alignItems: "center",
      [theme.breakpoints.down(800)]: {
        height: 100,
      },
    },
    "& .MuiTypography-h5": {
      [theme.breakpoints.down(800)]: {
        fontSize: 10,
      },
    },
    "& .MuiTypography-h3": {
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      padding: 10,
      backgroundImage: `linear-gradient(${APP_MAIN_COLOR}, #55fee5)`,
      border: "1px solid #d4c4c4",
      [theme.breakpoints.down(800)]: {
        fontSize: 14,
      },
    },
  },
}));

export const Mission = () => {
  const classes = useStyles({});
  return (
    <Card className={classes.mission}>
      <Typography variant="h3" color="text.secondary">
        MISSION
      </Typography>
      <CardActionArea>
        <CardMedia component="img" height="300" image={mission} alt="mission" />
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            At CB Control Systems, our mission is to enhance the comfort,
            health, and productivity of our clients by offering innovative HVAC
            and BMS solutions while ensuring environmental sustainability and
            energy efficiency.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
