import { makeStyles } from "@material-ui/core";
import { FaceBookWeb } from "./FaceBookWeb";
import { TwitterWeb } from "./TwitterWeb";
import { WhatsAppWeb } from "./WhatsAppWeb";
import { YoutubeWeb } from "./YoutubeWeb";
import { InstaWeb } from "./InstaWeb";
import {
  COLOR_WHITE,
  FACEBOOK_COLOR,
  INSTAGRAM_COLOR,
  TWITTER_COLOR,
  WHATSAPP_COLOR,
  YOUTUBE_COLOR,
} from "../constant/AppConstat";

const useStyles = makeStyles((theme) => ({
  socialMedia: {
    position: "fixed",
    left: 0,
    zIndex: 11,
    top: "30%",
    display: "flex",
    paddingLeft: 0,
    flexDirection: "column",
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    transition: "right 0.25s ease-in-out",
    cursor: "pointer",
    "& div": {
      display: "flex",
      width: 30,
      borderRadius: "0px 16px 0px 0px",
      border: `1px solid ${COLOR_WHITE}`,
      transition: "left 0.15s ease-in-out",
      "& path": {
        fill: COLOR_WHITE,
      },
      "&:hover": {
        width: 60,
      },
    },
  },
  fb: {
    boxShadow: "0 0 10px 4px rgb(19 19 19 / 6%)",
    backgroundColor: FACEBOOK_COLOR,
    "&:hover": {
      "& a": {
        marginLeft: 30,
      },
    },
  },
  tw: {
    boxShadow: "0 0 10px 4px rgb(19 19 19 / 6%)",
    backgroundColor: TWITTER_COLOR,
    "& a": {
      width: 32,
      height: 30,
      "& svg": {
        width: 20,
        height: 28,
        marginLeft: 4,
      }
    },
    "&:hover": {
      "& a": {
        width: 32,
        height: 30,
        marginLeft: 30,
      },
    },
  },
  yt: {
    boxShadow: "0 0 10px 4px rgb(19 19 19 / 6%)",
    backgroundColor: YOUTUBE_COLOR,
    "&:hover": {
      "& a": {
        marginLeft: 30,
      },
    },
  },
  wa: {
    boxShadow: "0 0 10px 4px rgb(19 19 19 / 6%)",
    backgroundColor: WHATSAPP_COLOR,
    "&:hover": {
      "& a": {
        marginLeft: 30,
      },
    },
  },
  ig: {
    boxShadow: "0 0 10px 4px rgb(19 19 19 / 6%)",
    backgroundColor: INSTAGRAM_COLOR,
    "&:hover": {
      "& a": {
        marginLeft: 30,
      },
    },
  },
}));

export const SocialLinks = () => {
  const classes = useStyles({});
  return (
    <div className={classes.socialMedia}>
      <div className={classes.fb}>
        <FaceBookWeb />
      </div>
      <div className={classes.tw}>
        <TwitterWeb />
      </div>
      <div className={classes.wa}>
        <WhatsAppWeb />
      </div>
      <div className={classes.ig}>
        <InstaWeb />
      </div>
      <div className={classes.yt}>
        <YoutubeWeb />
      </div>
    </div>
  );
};
