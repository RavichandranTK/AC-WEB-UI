import bg1 from "../../assets/images/ac-1.jpg";
import bg2 from "../../assets/images/ac-2.jpg";
import bg3 from "../../assets/images/ac-3.jpg";
import bg4 from "../../assets/images/ac-4.jpg";
import bg5 from "../../assets/images/ac-5.jpg";
import bg6 from "../../assets/images/ac-6.jpg";
import bg7 from "../../assets/images/ac-7.jpg";
import bg8 from "../../assets/images/ac-8.jpg";
import Carousel from "react-material-ui-carousel";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { createStyles, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    carouselImg: {
      backgroundSize: "cover",
      width: "100%",
      height: "80vh",
    },
    carousel: {
      width: "100%",
    },
  })
);
export const CarouselPage = () => {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay
      swipe
      indicators={false}
      className={classes.carousel}
      interval={2000}
      NextIcon={<ArrowRightOutlined />}
      PrevIcon={<ArrowLeftOutlined />}
      >
      <img className={classes.carouselImg} alt="carousel-images" src={bg7} />
      <img className={classes.carouselImg} alt="carousel-images" src={bg8} />
      <img className={classes.carouselImg} alt="carousel-images" src={bg6} />
      <img className={classes.carouselImg} alt="carousel-images" src={bg1} />
      <img className={classes.carouselImg} alt="carousel-images" src={bg2} />
      <img className={classes.carouselImg} alt="carousel-images" src={bg3} />
      <img className={classes.carouselImg} alt="carousel-images" src={bg4} />
      <img className={classes.carouselImg} alt="carousel-images" src={bg5} />
    </Carousel>
  );
};
