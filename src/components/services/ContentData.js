import { Typography, createStyles, makeStyles } from "@material-ui/core";
import { APP_MAIN_COLOR, FONT_12, FONT_15, FONT_18 } from "../constant/AppConstat";

const useStyles = makeStyles((theme) =>
  createStyles({
    contentDataContainer: {
      padding: "30px 20px",
      width: "100%",
      maxWidth: window.innerWidth - 250,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      [theme.breakpoints.down(600)]: {
        padding: 8,
        maxWidth: "max-content",
      },
    },
    contentImg: {
      width: "100%",
      height: "100%",
      maxWidth: 600,
      maxWidth: window.innerWidth - 600,
      maxHeight: 600,
      objectFit: "contain",
      [theme.breakpoints.down(600)]: {
        maxWidth: 300,
        borderRadius: 30,
        marginRight: theme.spacing(2),
      },
    },
    quoteContent: {
      margin: 30,
      "& i": {
        color: APP_MAIN_COLOR,
      },
      [theme.breakpoints.down(600)]: {
        margin: 8,
        "& i": {
          fontSize: FONT_18,
        },
      },
    },
    detailedContent: {
      margin: 30,
      [theme.breakpoints.down(600)]: {
        margin: 8,
      },
    },
    childContent: {
      margin: 30,
      [theme.breakpoints.down(600)]: {
        margin: 8,
        "& .MuiTypography-h4": {
          color: APP_MAIN_COLOR,
          textDecoration: "underline",
          fontSize: FONT_15,
        },
        "& .MuiTypography-h6": {
          fontSize: FONT_12,
        },
      },
      "& .MuiTypography-h4": {
        color: APP_MAIN_COLOR,
        textDecoration: "underline",
      },
    },
  })
);
export const ContentData = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.contentDataContainer}>
      <Typography className={classes.quoteContent} variant="h4">
        <i>"{data?.content}"</i>
      </Typography>
      <img
        className={classes.contentImg}
        src={data?.imgSrc || ""}
        alt={data?.imgSrc || "AC-Service"}
      ></img>
      <div className={classes.detailedContent}>
        {data?.metaData?.map((contentData) => {
          const key = Object.keys(contentData);
          const title = key[0]?.split("_")?.join(" ");
          const value = contentData[key] || "";
          return (
            <div className={classes.childContent}>
              <Typography variant="h4">{title}:</Typography>
              <Typography variant="h6">{value}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};
