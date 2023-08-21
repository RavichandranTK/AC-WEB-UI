import { Typography, createStyles, makeStyles } from "@material-ui/core";
import ContactUsImg from "../../assets/images/contactUs.jpg";
import {
  EmailOutlined,
  Language,
  LocationOn,
  PermPhoneMsg,
} from "@mui/icons-material";
import {
  APP_MAIN_COLOR,
  COLOR_BLACK,
  COLOR_WHITE,
  FONT_FAMILY,
  FONT_FAMILY_SECOND,
  GOOGLE_MAP_LOCATION,
  OWNER_EMAIL,
  OWNER_PHONE_NUMBER,
  OWNER_WEBSITE,
} from "../constant/AppConstat";
import { useNavigate } from "react-router-dom";
import { ContactUsForm } from "./ContactUsForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    contactUs: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      [theme.breakpoints.down(850)]: {
        flexDirection: "column",
      },
    },
    contactChild: {
      marginTop: 30,
      padding: 30,
      width: "50%",
      "& iframe": {
        borderRadius: "4px 80px",
        boxShadow:
          `4px 4px 4px 4px ${APP_MAIN_COLOR}, 3px 1px 1px 0px rgb(0 0 0 / 14%), 0px 4px 0px 0px rgb(0 0 0 / 12%)`,
      },
      [theme.breakpoints.down(850)]: {
        width: "auto",
      },
    },
    contactImg: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    contactInfo: {
      height: 450,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      boxShadow:
        `4px 4px 4px 4px ${APP_MAIN_COLOR}, 3px 1px 1px 0px rgb(0 0 0 / 14%), 0px 4px 0px 0px rgb(0 0 0 / 12%)`,
      borderRadius: "80px 4px",
      border: `1px solid ${COLOR_WHITE}`,
      position: "relative",
      backgroundColor: COLOR_WHITE,
      "& path": {
        fill: APP_MAIN_COLOR,
      },
      "& .MuiTypography-h5": {
        fontWeight: "bold",
        fontFamily: FONT_FAMILY,
        color: APP_MAIN_COLOR,
        textDecoration: "underline",
        marginLeft: 40,
      },
      "& .MuiTypography-h6": {
        fontFamily: FONT_FAMILY_SECOND,
        fontSize: 16,
        fontWeight: 500,
        color: COLOR_BLACK,
      },
      "& ul": {
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        rowGap: 10,
        "& li": {
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontFamily: FONT_FAMILY_SECOND,
          fontWeight: 500,
          cursor: "pointer",
        },
        "& li a": {
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: COLOR_BLACK,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  })
);

export const ContactUs = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.contactUsContainer}>
      <img
        alt="contact-us"
        src={ContactUsImg}
        className={classes.contactImg}
      ></img>
      <ContactUsForm/>
      <div className={classes.contactUs}>
        <div className={classes.contactChild}>
          <iframe
            src={GOOGLE_MAP_LOCATION}
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={classes.contactChild}>
          <div className={classes.contactInfo}>
            <Typography variant="h5">BANGLORE OFFICE:</Typography>
            <ul>
              <li>
                <LocationOn />
                <Typography variant="h6">
                  No.6, Ground Floor, Chikkalasandra 1st Main Road, 2nd Cross,
                  BIP school, Manjunatha Nagar, Bengaluru - 560 061
                </Typography>
              </li>
              <li>
                <a href="mailto:cbcontrolsystems@email.com">
                  <EmailOutlined /> <span>{OWNER_EMAIL}</span>
                </a>
              </li>
              <li>
                <a href="tel:+919487260875">
                  <PermPhoneMsg /> <span>{OWNER_PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/")}>
                  <Language /> <span>{OWNER_WEBSITE}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
