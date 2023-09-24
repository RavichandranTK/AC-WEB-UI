import { makeStyles } from "@material-ui/core";
import { NavHeader } from "./nav/NavHeader";
import { Footer } from "./Footer";
import { TopNav } from "./nav/TopNav";
import { GetInTouch } from "./get-in-touch/GetInTouch";
import { SocialLinks } from "./social/SocialLinks";
import { CopyRights } from "./CopyRights";

const useStyles = makeStyles((theme) => ({
  appMain: {
    width: "100%",
    height: "auto",
  },
  childrenData: {
    minHeight: "100vh",
  },
  childContent: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const AppMain = ({ children }) => {
  const classes = useStyles({});
  return (
    <div className={classes.appMain}>
      <TopNav />
      <GetInTouch/>
      <SocialLinks/>
      <NavHeader />
      <div className={classes.childContent}>
        <div className={classes.childrenData}>{children}</div>
      </div>
      <Footer />
      <CopyRights/>
    </div>
  );
};
