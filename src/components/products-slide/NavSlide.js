import { useEffect, useState } from "react";
import bg1 from "../../assets/images/mainAc.jpg";
import nav1 from "../../assets/images/res.webp";
import nav2 from "../../assets/images/fitOut.jpg";
import nav3 from "../../assets/images/comercial.png";
import nav4 from "../../assets/images/energy.jpeg";
import {
  Divider,
  Grid,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
  createStyles({
    image1: {
      width: "100%",
      height: 600,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      transition: "background-image 1s",
      // "-webkit-transition": "background-image .5s ease-out",
    },
    navCard: {
      height: 600,
      borderRight: "1px solid #03f0fc",
      overflow: "hidden",
    },
    navCard1: {
      position: "relative",
      height: 100,
      "&:hover": {
        "-webkit-transition": "height .5s ease-out",
        backgroundColor: "rgb(9 69 71 / 50%);",
        height: 600,
        "& .navDetails": {
          height: "100%",
        },
      },
      "& .MuiTypography-h5": {
        backgroundColor: "rgba(9, 80, 157, 1)",
        height: 100,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        position: "relative",
        zIndex: 10,
        fontWeight: "bold",
        [theme.breakpoints.down(800)]: {
          fontSize: 12,
        },
      },
      "& .MuiTypography-h6": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        color: "#fff",
        [theme.breakpoints.down(800)]: {
          fontSize: 8,
        },
      },
    },
    text: {
      color: "white",
      fontSize: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      "-webkit-transform": "translate(-50%, -50%)",
      "-ms-transform": "translate(-50%, -50%)",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      width: "100%",
    },
    navDetails: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      overflow: "hidden",
      width: "100%",
      height: 100,
      transition: ".5s ease",
    },
  })
);

export const NavSlide = () => {
  const [showDetails, setShowDetails] = useState(null);
  const bgArr = [bg1, nav1, nav2, nav3, nav4];
  const handleHover = (value) => {
    setShowDetails(value);
    setNewImg(bgArr[value]);
  };
  const [newImg, setNewImg] = useState(bgArr[0]);
  useEffect(() => {
    if (!showDetails) {
      setNewImg(bg1);
    }
  }, [showDetails]);

  const classes = useStyles({ newImg });

  return (
    <div
      className={classes.image1}
      style={{ backgroundImage: newImg ? `url(${newImg})` : `url(${bg1})` }}
    >
      <Grid container spacing={0}>
        <Grid className={classes.navCard} item xs={3}>
          <div
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => setShowDetails(null)}
            className={classes.navCard1}
          >
            <Typography variant="h5" component="p">
              RESIDENTIAL SYSTEMS
            </Typography>
            <div
              style={{ display: showDetails === 1 ? "block" : "none" }}
              className={clsx(classes.navDetails, "navDetails")}
            >
              <Divider />
              <Typography className={classes.text} variant="h6" component="p">
                We equip homes with HVAC & R systems that are reliable, energy &
                cost efficient. Our products, from world’s leading brands,
                ensures consistent temperature, humidity & air quality at your
                home, always!
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid className={classes.navCard} item xs={3}>
          <div
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => setShowDetails(null)}
            className={classes.navCard1}
          >
            <Typography variant="h5" component="p">
              FIT OUT SOLUTIONS
            </Typography>
            <div
              style={{ display: showDetails === 2 ? "block" : "none" }}
              className={clsx(classes.navDetails, "navDetails")}
            >
              <Divider />
              <Typography className={classes.text} variant="h6" component="p">
                We equip building preparation, fit-out refers to activities such
                as the installation of the floors, ceilings, partitions, and
                furnishings. Additionally, building services such as cabling,
                wiring, internet connectivity, and communication arrangements
                may also fall under the fitting out process.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.navCard} item xs={3}>
          <div
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={() => setShowDetails(null)}
            className={classes.navCard1}
          >
            <Typography variant="h5" component="p">
              COMMERCIAL SYSTEMS
            </Typography>
            <div
              style={{ display: showDetails === 3 ? "block" : "none" }}
              className={clsx(classes.navDetails, "navDetails")}
            >
              <Divider />
              <Typography className={classes.text} variant="h6" component="p">
                With our team Commercial HVAC tenant fit-outs require an
                extensive amount of planning to be completed properly. A number
                of competing priorities must work together to ensure seamless
                operations that don’t cause damage to the building and don’t
                inflate construction costs or extend deadlines.
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.navCard} item xs={3}>
          <div
            onMouseEnter={() => handleHover(4)}
            onMouseLeave={() => setShowDetails(null)}
            className={classes.navCard1}
          >
            <Typography variant="h5" component="p">
              ENERGY SOLUTIONS
            </Typography>
            <div
              style={{ display: showDetails === 4 ? "block" : "none" }}
              className={clsx(classes.navDetails, "navDetails")}
            >
              <Divider />
              <Typography className={classes.text} variant="h6" component="p">
                With the looming threats of environmental changes due to global
                warming, independence from fossil fuels together with energy
                saving are being prioritized. Among the electrical equipment in
                buildings, air conditioning has the potential to provide a lot
                of savings. Despite efforts in energy saving technology, the
                waste in air-conditioning is primarily due to the users’
                inattentiveness
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
