import {
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { HVAC_TAB_LIST_ARR, HVAC_TAB_PANEL_CONTENT_ARR } from "./ServiceData";
import { ACServiceTabs } from "./ACServiceTabs";
import HVACBgImg from "../../assets/images/hvac/hvac-1.jpg";
const useStyles = makeStyles((theme) =>
  createStyles({
    hvacImg: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    hvac: {
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

export const HVACServices = () => {
  const classes = useStyles();
  return (
    <div className={classes.hvac}>
      <img src={HVACBgImg} alt="hvac-bg" className={classes.hvacImg}></img>
      <ACServiceTabs title="HVAC SERVICES" tabListArr={HVAC_TAB_LIST_ARR} tabPanelContentArr={HVAC_TAB_PANEL_CONTENT_ARR} />
    </div>
  );
};
