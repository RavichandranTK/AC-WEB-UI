import { Typography, makeStyles } from "@material-ui/core";
import { ReactComponent as MainLogo } from "../../src/assets/icons/mainLogo.svg";
import { useNavigate } from "react-router-dom";
import indianFlag from "../../src/assets/images/indianFlag.png";
import { APP_MAIN_COLOR, COLOR_BLACK, FONT_14, FONT_18, FONT_24, FONT_FAMILY, FONT_FAMILY_SECOND, OWNER_EMAIL, OWNER_PHONE_NUMBER, OWNER_WEBSITE } from "./constant/AppConstat";
import clsx from "clsx";
import { FaceBookWeb } from "./social/FaceBookWeb";
import { YoutubeWeb } from "./social/YoutubeWeb";
import { WhatsAppWeb } from "./social/WhatsAppWeb";
import { InstaWeb } from "./social/InstaWeb";
import { TwitterWeb } from "./social/TwitterWeb";
import { EmailOutlined, Language, LocationOn, PermPhoneMsg } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
  footer: {
    display: "grid",
    gap: "1rem",
    height: "auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    flexWrap: "wrap",
    backgroundColor: "#e2e1d5",
  },
  footerChild: {
    "& .MuiDivider-root": {
      width: "50%",
      position: "relative",
      top: "5%",
      left: "25%",
      height: 3,
      [theme.breakpoints.down(800)]: {
        borderRight: "none",
      },
    },
    [theme.breakpoints.down(616)]: {
      borderTop: `2px solid ${APP_MAIN_COLOR}`,
      borderRight: "none !important",
    },
  },
  footerFirst: {
    display: "flex",
    padding: theme.spacing(2),
    flexDirection: "column",
    borderRight: `2px solid ${APP_MAIN_COLOR}`,
  },
  footerSecond: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: theme.spacing(2),
    borderRight: `2px solid ${APP_MAIN_COLOR}`,
    "& .links": {
      cursor: "pointer",
      padding: theme.spacing(1),
      "&:hover": {
        textDecoration: "underline",
        color: APP_MAIN_COLOR,
      },
    },
    "& .quick-link": {
      cursor: "default",
      fontWeight: "bold",
      textDecoration: "underline",
      color: APP_MAIN_COLOR,
      fontSize: FONT_24,
      fontFamily: FONT_FAMILY,
    },
  },
  footerThird: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRight: "none !important",
    padding: theme.spacing(2),
    "& .address-title": {
      color: APP_MAIN_COLOR,
      fontSize: theme.spacing(2),
      fontWeight: "bold",
      textDecoration: "underline",
      fontSize: FONT_18,
    },
    "& .address": {
      padding: theme.spacing(0.5, 0, 0.5, 0),
    },
    "& .contact": {
      paddingTop: theme.spacing(3),
    },
  },
  logoContainer: {
    marginTop: 20,
    "& .bgImg": {
      width: 100,
      height: 100,
      "& path": {
        fill: APP_MAIN_COLOR,
      },
    },
    "& p": {
      margin: theme.spacing(1, 0),
      color: APP_MAIN_COLOR,
      fontWeight: "bold",
      fontSize: FONT_14,
    },
  },
  socialMedia: {
    "& .social": {
      padding: theme.spacing(1, 1.25),
    },
    "& .faceBook": {
      paddingLeft: theme.spacing(0),
      "& path": {
        fill: "#1977f2",
      },
    },
    "& .twitter": {
      "& svg": {
        width: 20,
        height: 24,
        "& path": {
          fill: "#1a1a1a",
        },
      },
    },
    "& .youtube": {
      "& path": {
        fill: "#ff001b",
      },
    },
    "& .whatsapp": {
      "& path": {
        fill: "#01a884",
      },
    },
    "& .instagram": {
      "& path": {
        fill: "#f6113b",
      },
    },
    [theme.breakpoints.down(1000)]: {
      "& svg": {
        width: 16,
        height: 16,
      },
      "& .social": {
        padding: theme.spacing(0.5, 0.5),
      },
    },
  },
  weReInContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing(1),
    "& p": {
      marginRight: theme.spacing(2),
    },
    "& .indianFlag": {
      width: 36,
      height: 36,
    },
    [theme.breakpoints.down(1000)]: {
      "& .indianFlag": {
        width: 20,
        height: 20,
      },
    },
  },
  contactInfo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& path": {
      fill: APP_MAIN_COLOR,
    },
    "& .MuiTypography-h5": {
      fontWeight: "bold",
      fontFamily: FONT_FAMILY,
      color: APP_MAIN_COLOR,
      textDecoration: "underline",
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
      padding: theme.spacing(0),
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
}));

export const Footer = () => {
  const classes = useStyles({});
  const navigate = useNavigate();
  return (
    <div className={classes.footer}>
      <div className={clsx(classes.footerChild, classes.footerFirst)}>
        <div className={classes.logoContainer}>
          <MainLogo className="bgImg" onClick={() => navigate("/")} />
          <p>
            CB Control system Providing top-notch HVAC & BMS solutions and
            services
          </p>
        </div>
        <div className={classes.socialMedia}>
          <FaceBookWeb/>
          <YoutubeWeb/>
          <TwitterWeb/>
          <WhatsAppWeb/>
          <InstaWeb/>
        </div>
        <div className={classes.weReInContainer}>
          <p>We are in:</p>
          <img
            className="indianFlag"
            alt="flag"
            rel="noreferrer"
            src={indianFlag}
          ></img>
        </div>
      </div>
      <div className={clsx(classes.footerChild, classes.footerSecond)}>
        <span className="links quick-link">Quick Links</span>
        <span className="links about-us" onClick={() => navigate("/about-us")}>
          About Us
        </span>
        <span className="links contact-us" onClick={() => navigate("/contact-us")}>Contact Us</span>
        <span className="links blogs">Products</span>
        <span className="links faqs" onClick={() => navigate("/service-hvac")}>HVAC Service</span>
        <span className="links privacy-policy" onClick={() => navigate("/service-bms")}>BMS Service</span>
        <span className="links terms-conditions" onClick={() => navigate("/contact-us")}>FAQs</span>
      </div>
      <div className={clsx(classes.footerChild, classes.footerThird)}>
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
  );
};
