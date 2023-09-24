import { Typography, makeStyles } from "@material-ui/core";
import aboutUsImg from "../assets/images/aboutUs.jpg";
import founderImg from "../assets/images/owner.webp";
import mainBuilding from "../assets/images/mainBuilding.jpg";
import { ReactComponent as MainLogo } from "../assets/icons/mainLogo.svg";
import { APP_MAIN_COLOR, OWNER_NAME } from "./constant/AppConstat";
import clsx from "clsx";
import React from 'react';

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Merriweather', serif",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: APP_MAIN_COLOR,
    textDecoration: "underline",
  },
  subTitle: {
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
  },
  aboutImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 20,
  },
  mainLogo: {
    width: 100,
    height: 100,
    "& path": {
      fill: APP_MAIN_COLOR,
    },
  },
  aboutDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "10px 30px",
  },
  ofcDetails: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "1fr 1fr",
    width: "fit-content",
    flexWrap: "wrap",
    [theme.breakpoints.down(600)]: {
      display: "flex",
    },
  },
  ofcDetailschild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentRight: {
    fontWeight: "bold",
    color: APP_MAIN_COLOR,
  },
  buildingImg: {
    borderRadius: 30,
  },
  founderDetail: {
    width: "fit-content",
    marginTop: 20,
    display: "none",
  },
  founder: {
    width: 400,
    height: 400,
    borderRadius: "100%",
    border: `2px solid ${APP_MAIN_COLOR}`,
    objectFit: "cover",
    boxShadow:
      "4px 4px 4px 4px rgb(0 0 0 / 20%), 3px 1px 1px 0px rgb(0 0 0 / 14%), 0px 4px 0px 0px rgb(0 0 0 / 12%)",
  },
  founderData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& .MuiTypography-h4": {
      fontWeight: "bold",
      color: APP_MAIN_COLOR,
    },
  },
}));

export const AboutUs = () => {
  const classes = useStyles({});
  return (
    <div className={classes.about}>
      <img alt="about-us" src={aboutUsImg} className={classes.aboutImg}></img>
      <div className={classes.titleContainer}>
        <MainLogo className={classes.mainLogo} />
        <Typography
          className={classes.title}
          gutterBottom
          variant="h3"
          component="div"
        >
          CB Control Systems
        </Typography>
      </div>
      <div className={classes.aboutDetails}>
        <div className={classes.ofcDetails}>
          <div className={classes.ofcDetailschild}>
            <div className={classes.contentRight}>
              <Typography variant="h6">
                <i>
                  "CB Control Systems is a cutting-edge startup dedicated to
                  providing top-notch HVAC & BMS solutions and services. With a
                  passion for customer satisfaction and a team of highly skilled
                  professionals, we aim to become a leading player in the HVAC
                  and BMS industry. We prioritize our customers' needs, and our
                  solutions are tailored to meet their specific requirements."
                </i>
              </Typography>
            </div>
          </div>
          <div className={classes.ofcDetailschild}>
            <div className={classes.content}>
              <img
                alt="building-img"
                src={mainBuilding}
                className={clsx(classes.aboutImg, classes.buildingImg)}
              ></img>
            </div>
          </div>
        </div>
        <Typography
          className={classes.subTitle}
          variant="h6"
          color="text.secondary"
        >
          A Leading Bluestar AC Dealers in Mumbai, Expert Aircon specializes in
          providing end-to-end heating, ventilation, and air conditioning (HVAC)
          solutions to a range of commercial, institutional, and industrial
          projects. Being a highly-rated channel partner in the West region for
          Blue Star, India’s leading HVAC company, we have successfully planned,
          designed, and implemented centralized as well as packaged air
          conditioning solutions for entertainment parks, large commercial
          establishments, corporate workplaces, hotels, educational
          institutions, and other commercial complexes in and around Mumbai and
          Pune.
        </Typography>
        <Typography
          className={classes.subTitle}
          variant="h6"
          color="text.secondary"
        >
          Led by a team having an in depth knowledge, Expert Aircon draws
          immense pride from the fact that we are amongst the selected few
          commercial air conditioning solutions providers that has successfully
          delivered HVAC solutions for scales ranging from 1 ton to 1800 tons
          all within time and budget. Our diverse work portfolio is a living
          testimony to our credentials as a top-class air conditioning
          contractor in Mumbai.
        </Typography>
        <Typography
          className={classes.subTitle}
          variant="h6"
          color="text.secondary"
        >
          Apart from providing turnkey solutions encompassing designing,
          installing and servicing HVAC and refrigeration systems for our
          clients, Expert Aircon, one of the effective AC Maintenance
          Contractors undertakes work for large-scale projects. So, whether you
          need uniform cooling for your sprawling corporate office or wish to
          design, service, and repair the entire HVAC system of a huge mall, we
          can serve as a strategic HVAC partner that you can rely on throughout
          the lifespan of your air conditioning systems.
        </Typography>
        <Typography
          className={classes.subTitle}
          variant="h6"
          color="text.secondary"
        >
          As a socially and environmentally responsible business, we, one of the
          established HVAC service providers create sustainable value for our
          customers, staff and society in everything we do. Our design engineers
          have been trained so that our designs and our consultation can adhere
          to the concepts of environmental sustainability and assist our
          customers to improve their green credibility.
        </Typography>
        <div className={classes.founderDetail}>
          <img
            alt="founder-img"
            src={founderImg}
            className={classes.founder}
          ></img>
          <div className={classes.founderData}>
            <Typography variant="h4">{OWNER_NAME}</Typography>
            <Typography variant="h5">Founder & CEO</Typography>
            <Typography variant="h5">CB Control Systems</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
