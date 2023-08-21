import {
  AppBar,
  Divider,
  Tab,
  Tabs,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import {
  APP_MAIN_COLOR,
  COLOR_WHITE,
  FONT_10,
  FONT_20,
  FONT_FAMILY_SECOND,
} from "../constant/AppConstat";
import { A11yProps, TabPanelData } from "./TabPanelData";
import { ContentData } from "./ContentData";
const useStyles = makeStyles((theme) =>
  createStyles({
    acServiceTabRoot: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexGrow: 1,
      maxWidth: "-webkit-fill-available",
      margin: theme.spacing(4),
      "& .MuiAppBar-colorDefault": {
        backgroundColor: "transparent",
      },
      "& .MuiPaper-elevation4": {
        boxShadow: "none",
      },
      "& .MuiTabs-indicator": {
        backgroundColor: "#06e9f1",
        height: 4,
      },
      "& .MuiAppBar-root": {
        maxWidth: "-webkit-fill-available",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiTabs-root": {
          maxWidth: "-webkit-fill-available",
        },
        "& .MuiTab-root": {
          color: APP_MAIN_COLOR,
          border: `2px solid ${APP_MAIN_COLOR}`,
          borderRadius: 8,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottom: "none",
          [theme.breakpoints.down(600)]: {
            padding: 2,
            maxWidth: 150,
            fontSize: FONT_10,
          },
        },
        "& .MuiTab-textColorPrimary.Mui-selected": {
          color: COLOR_WHITE,
          backgroundColor: APP_MAIN_COLOR,
          borderBottom: "none",
        },
        "& .MuiTabScrollButton-root": {
          width: 46,
          borderRadius: "50%",
          backgroundColor: APP_MAIN_COLOR,
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        },
        [theme.breakpoints.down(600)]: {
          "& .MuiTabs-scrollButtonsDesktop": {
            display: "flex !important",
            width: 36,
            height: 36,
            position: "relative",
            top: 8,
          },
        },
      },
      "& .tabpanel": {
        border: `2px solid ${APP_MAIN_COLOR}`,
        borderRadius: 30,
        width: "100%",
        maxWidth: "-webkit-fill-available",
      },
    },
    serviceTitleContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .MuiDivider-root": {
        width: 100,
        height: 4,
        backgroundColor: APP_MAIN_COLOR,
        [theme.breakpoints.down(600)]: {
          width: 60,
        },
      },
    },
    serviceTitle: {
      color: APP_MAIN_COLOR,
      margin: 10,
      fontWeight: "bold",
      fontFamily: FONT_FAMILY_SECOND,
      [theme.breakpoints.down(600)]: {
        fontSize: FONT_20,
      },
    },
  })
);

export const ACServiceTabs = ({ title, tabListArr, tabPanelContentArr }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.acServiceTabRoot}>
      <div className={classes.serviceTitleContainer}>
        <Divider />
        <Typography className={classes.serviceTitle} variant="h3">
          {title}
        </Typography>
        <Divider />
      </div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabListArr?.map(({ title, tabValue }) => {
            return <Tab label={title} {...A11yProps(tabValue)} />;
          })}
        </Tabs>
        {tabPanelContentArr?.map(({ tabValue, data }) => {
          return (
            value === tabValue && (
              <TabPanelData value={tabValue} index={tabValue}>
                <ContentData data={data} />
              </TabPanelData>
            )
          );
        })}
      </AppBar>
    </div>
  );
};
