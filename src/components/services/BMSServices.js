import { createStyles, makeStyles } from "@material-ui/core";
import { ACServiceTabs } from "./ACServiceTabs";
import bmsMainImg from "../../assets/images/bms/bmsMain.jpeg";
import { BMS_TAB_LIST_ARR, BMS_TAB_PANEL_CONTENT_ARR } from "./ServiceData";
const useStyles = makeStyles((theme) =>
  createStyles({
    bmsImg: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    bms: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      flexGrow: 1,
      width: "100%",
      margin: theme.spacing(1, 0),
      position: "relative",
      zIndex: 0,
    },
  })
);
export const BMSServices = () => {
  const classes = useStyles();
  return (
    <div className={classes.bms}>
      <img src={bmsMainImg} alt="bms-bg" className={classes.bmsImg}></img>
      <ACServiceTabs
        title="BMS SERVICES"
        tabListArr={BMS_TAB_LIST_ARR}
        tabPanelContentArr={BMS_TAB_PANEL_CONTENT_ARR}
      />
    </div>
  );
};
