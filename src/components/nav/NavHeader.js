import {
  Button,
  Drawer,
  MenuItem,
  Popover,
  createStyles,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { CloseSharp, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";
import { ReactComponent as MainLogo } from "../../assets/icons/mainLogo.svg";
import { APP_MAIN_COLOR, COLOR_WHITE } from "../constant/AppConstat";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
  createStyles({
    downArrow: {
      transform: ({ rotateArrow }) => rotateArrow && "rotate(180deg)",
    },
    wrapper: {
      width: "100%",
      margin: "0 auto",
      boxShadow: "15px 15px 30px #727272, -15px -15px 30px #ffffff",
      "& nav": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: APP_MAIN_COLOR,
        padding: "1rem 1.5rem",
        borderRadius: "0.4rem",
        "& ul": {
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        },
      },
    },
    menu: {
      width: "100%",
      height: 24,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& button": {
        color: COLOR_WHITE,
        cursor: "pointer",
        fontWeight: "bold",
      },
    },
    mainLogo: {
      width: 50,
      height: 50,
      cursor: "pointer",
      "& path": {
        fill: COLOR_WHITE,
      },
    },
    mobileWrapper: {
      width: "100%",
      height: 50,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: APP_MAIN_COLOR,
      boxShadow: "15px 15px 30px #727272, -15px -15px 30px #ffffff",
    },
    mobileMenu: {
      display: "flex",
      backgroundColor: APP_MAIN_COLOR,
      height: "-webkit-fill-available",
      alignItems: "flex-start",
      "& ul": {
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "25%",
        padding: 14,
        "& li": {
          borderBottom: `1px solid ${COLOR_WHITE}`,
        },
      },
      "& .MuiButton-text": {
        color: COLOR_WHITE,
      },
      "& .MuiIconButton-edgeStart": {
        marginLeft: 0,
      },
    },
    mobileMainLogo: {
      marginLeft: "5%",
    },
    menuOption: {
      marginRight: "5%",
      "& path": {
        fill: COLOR_WHITE,
      },
    },
    closeIcon: {
      position: "absolute",
      top: 8,
      left: 8,
      border: `1px solid ${COLOR_WHITE}`,
      borderRadius: "50%",
      "& path": {
        fill: COLOR_WHITE,
      },
    },
  })
);

export const NavHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [rotateArrow, setRotateArrow] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const serviceHvac = () => {
    navigate("/service-hvac");
    setAnchorEl(null);
  };

  const serviceBms = () => {
    navigate("/service-bms");
    setAnchorEl(null);
  };

  useEffect(() => {
    setRotateArrow(!rotateArrow);
  }, [anchorEl]);

  const id = open ? "simple-popover" : undefined;
  const classes = useStyles({ rotateArrow });
  const theme = useTheme();
  const isLapView = useMediaQuery(theme.breakpoints.up(700));
  return isLapView ? (
    <div className={classes.wrapper}>
      <nav>
        <div className={classes.menu}>
          <ul>
            {/* <li>
              <MainLogo
                className={classes.mainLogo}
                onClick={() => navigate("/")}
              />
            </li> */}
            <li>
              <Button
                variant="text"
                onClick={() => navigate("/")}
                startIcon={<Home />}
              >
                Home
              </Button>
            </li>
            <li>
              <Button variant="text" onClick={() => navigate("/about-us")}>
                About Us
              </Button>
            </li>
            <li>
              <Button variant="text">Products</Button>
            </li>
            <li>
              <Button
                variant="text"
                aria-describedby={id}
                onClick={handleClick}
                className={classes.service}
                endIcon={
                  <KeyboardArrowDownIcon className={classes.downArrow} />
                }
              >
                Services
              </Button>
            </li>
            <li>
              <Button variant="text" onClick={() => navigate("/contact-us")}>
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </nav>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={serviceHvac}>HVAC Services</MenuItem>
        <MenuItem onClick={serviceBms}>BMS Services</MenuItem>
      </Popover>
    </div>
  ) : (
    <div className={classes.mobileWrapper}>
      <MainLogo
        className={clsx(classes.mainLogo, classes.mobileMainLogo)}
        onClick={() => navigate("/")}
      />
      <MenuIcon
        className={classes.menuOption}
        onClick={() => setOpenDrawer(true)}
      ></MenuIcon>
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div className={classes.mobileMenu}>
          <CloseSharp
            className={classes.closeIcon}
            onClick={() => setOpenDrawer(false)}
          />
          <ul onClick={() => setOpenDrawer(false)}>
            <MainLogo
              className={classes.mainLogo}
              onClick={() => navigate("/")}
            />
            {/* <li>
            </li> */}
            <li>
              <Button
                variant="text"
                onClick={() => navigate("/")}
                startIcon={<Home />}
              >
                Home
              </Button>
            </li>
            <li>
              <Button variant="text" onClick={() => navigate("/about-us")}>
                About Us
              </Button>
            </li>
            <li>
              <Button variant="text">Products</Button>
            </li>
            <li>
              <Button
                variant="text"
                onClick={serviceHvac}
                className={classes.service}
              >
                HVAC Services
              </Button>
            </li>
            <li>
              <Button
                variant="text"
                onClick={serviceBms}
                className={classes.service}
              >
                BMS Services
              </Button>
            </li>
            <li>
              <Button variant="text" onClick={() => navigate("/contact-us")}>
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
