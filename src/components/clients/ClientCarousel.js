import bg1 from "../../assets/images/ac-1.jpg";
import bg2 from "../../assets/images/ac-2.jpg";
import bg3 from "../../assets/images/ac-3.jpg";
import bg4 from "../../assets/images/ac-4.jpg";
import bg5 from "../../assets/images/ac-5.jpg";
import bg6 from "../../assets/images/ac-6.jpg";
import bg7 from "../../assets/images/ac-7.jpg";
import bg8 from "../../assets/images/ac-8.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { APP_MAIN_COLOR } from "../constant/AppConstat";
const useStyles = makeStyles((theme) =>
  createStyles({
    clientlImg: {
      backgroundSize: "cover",
      width: 300,
      height: 100,
      border: `1px solid ${APP_MAIN_COLOR}`,
      borderRadius: 16,
      [theme.breakpoints.between(700, 1000)]: {
        width: 200,
        height: 100,
      },
      [theme.breakpoints.down(700)]: {
        width: 100,
        height: 80,
      },
    },
    clientCarouselContainer: {
      position: "static",
      maxWidth: 1200,
      padding: "0px 15px",
      margin: "20px auto",
    },
    title: {
      color: APP_MAIN_COLOR,
      fontWeight: "bold",
      margin: "10px auto",
    },
  })
);
export const ClientCarousel = () => {
  const classes = useStyles();
  const swiperImg = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];
  return (
    <div className={classes.clientCarouselContainer}>
      <Typography className={classes.title} variant="h4">
        Our Clients
      </Typography>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        autoplay
      >
        {swiperImg?.map((img) => {
          return (
            <SwiperSlide>
              <img
                className={classes.clientlImg}
                alt="carousel-images"
                src={img}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
