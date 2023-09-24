import { Typography, createStyles, makeStyles } from "@material-ui/core";
import { CallOutlined, EmailOutlined } from "@mui/icons-material";
import { ReactComponent as MainLogo } from "../../assets/icons/mainLogo.svg";
import { useNavigate } from "react-router-dom";
import { APP_MAIN_COLOR, OWNER_EMAIL, OWNER_PHONE_NUMBER } from "../constant/AppConstat";
const useStyles = makeStyles((theme) =>
  createStyles({
    topNav: {
      width: "100%",
      height: 50,
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      marginBottom: 10,
      color: "#1a1a1a",
      "& .bgImg": {
        width: theme.spacing(8),
        height: theme.spacing(7),
        cursor: "pointer",
        "& path": {
          fill: APP_MAIN_COLOR,
        },
        [theme.breakpoints.down(800)]: {
          display: "none",
        },
      },
    },
    contactContainer: {
      display: "flex",
      [theme.breakpoints.down(800)]: {
        marginTop: 10,
        flexDirection: "column",
      },
    },
    title: {
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      [theme.breakpoints.down(800)]: {
        fontSize: 10,
      },
    },
    contact: {
      display: "flex",
      alignItems: "center",
      margin: "0 20px",
      gap: 15,
      [theme.breakpoints.down(800)]: {
        fontSize: 10,
        gap: 4,
      },
      "& svg": {
        width: 17,
        height: 17,
        "& path": {
          fill: "blue",
        },
      },
    },
  })
);
export const TopNav = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.topNav}>
      <MainLogo className="bgImg" onClick={() => navigate("/")} />
      <div className={classes.contactContainer}>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h3"
          component="div"
        >
          Do you need any help.? Here we are:
        </Typography>
        <a className={classes.contact} href={`tel:${OWNER_PHONE_NUMBER}`}>
          <CallOutlined /> <span>{OWNER_PHONE_NUMBER}</span>
        </a>
        <a className={classes.contact} href={`mailto:${OWNER_EMAIL}`}>
          <EmailOutlined /> <span>{OWNER_EMAIL}</span>
        </a>
      </div>
    </div>
  );
};
