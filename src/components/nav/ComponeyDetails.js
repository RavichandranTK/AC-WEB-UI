import { Typography, createStyles, makeStyles } from "@material-ui/core";
import { CarouselPage } from "../carousel/CarouselPage";
import { useNavigate } from "react-router-dom";
import { Vision } from "../Vision";
import { Mission } from "../Mission";
import { NavSlide } from "../products-slide/NavSlide";
import { VisionMission } from "../vision-mission/VisionMission";
import { WhyChooseCard } from "../../why-choose/WhyChooseCard";
import { WeAre } from "../WeAre";
import { Details } from "../Details";
import { ClientCarousel } from "../clients/ClientCarousel";

const useStyles = makeStyles((theme) =>
  createStyles({
    companyDetails: {
      fontSize: 24,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2, 12),
      [theme.breakpoints.down(1000)]: {
        padding: theme.spacing(1, 2),
        fontSize: 16,
      },
    },
    acImg: {
      width: "99%",
      height: 500,
      padding: 4,
      boxShadow: "0 0 4px 1px rgb(113 59 12)",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      fontWeight: "bold",
      [theme.breakpoints.down(1000)]: {
        fontSize: 24,
      },
    },
    visionMission: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      [theme.breakpoints.down(1000)]: {
        margin: 10,
        "& .MuiTypography-h5": {
          fontSize: 16,
        },
      },
    },
    subTitle: {
      padding: 20,
      margin: 30,
      boxShadow:
        "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      "& span": {
        fontSize: 16,
        color: "blue",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
      [theme.breakpoints.down(1000)]: {
        padding: 8,
        margin: 10,
        fontSize: 16,
        "& span": {
          fontSize: 10,
        },
      },
    },
  })
);
export const ComponeyDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <CarouselPage />
      <Details/>
      <WeAre/>
      <NavSlide />
      <VisionMission/>
      <WhyChooseCard/>
      <ClientCarousel/>
    </>
  );
};
