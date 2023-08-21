import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import WhyUs from "../assets/images/whyUs.jpg";
import {
  BalanceRounded,
  Diversity1Rounded,
  ElectricBoltRounded,
  HourglassEmptyRounded,
  HubRounded,
} from "@mui/icons-material";

const useStyles = makeStyles((theme) =>
  createStyles({
    whyChoose: {
      "& .MuiCardMedia-img": {
        height: 400,
      },
      "& .MuiCard-root": {
        margin: "5% 5%",
      },
      "& .MuiPaper-elevation1": {
        boxShadow:
          "15px 21px 20px 4px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      },
    },
    childCards: {
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      flexWrap: "wrap",
    },
    childCard: {
      height: 400,
      boxShadow:
        "4px 4px 4px 4px rgb(0 0 0 / 20%), 3px 1px 1px 0px rgb(0 0 0 / 14%), 0px 4px 0px 0px rgb(0 0 0 / 12%)",
      "& .MuiDivider-root": {
        width: "50%",
        position: "relative",
        top: "5%",
        left: "25%",
        height: 3,
      },
    },
    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      "& svg": {
        width: 100,
        height: 140,
      },
      "& .MuiTypography-h4": {
        fontWeight: "bold",
      },
    },
    content: {
      marginTop: "10%",
      padding: "0 16px",
    },
  })
);
export const WhyChooseCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.whyChoose}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={WhyUs}
          alt="Why-us"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <div className={classes.childCards}>
              <div className={classes.childCard}>
                <div className={classes.header}>
                  <Diversity1Rounded />
                  <Typography variant="h4">Expert Team</Typography>
                </div>
                <Divider />
                <div className={classes.content}>
                  <Typography variant="h6">
                    Our team comprises highly skilled and experienced HVAC
                    professionals who are committed to delivering excellence.
                  </Typography>
                </div>
              </div>
              <div className={classes.childCard}>
                <div className={classes.header}>
                  <HubRounded />
                  <Typography variant="h4">Customer-Centric</Typography>
                </div>
                <Divider />
                <div className={classes.content}>
                  <Typography variant="h6">
                    We prioritize our customers' needs, and our solutions are
                    tailored to meet their specific requirements.
                  </Typography>
                </div>
              </div>
              <div className={classes.childCard}>
                <div className={classes.header}>
                  <BalanceRounded />
                  <Typography variant="h4">Energy Efficiency</Typography>
                </div>
                <Divider />
                <div className={classes.content}>
                  <Typography variant="h6">
                    With a strong focus on sustainability, we offer
                    energy-efficient solutions to minimize environmental impact
                    and save costs.
                  </Typography>
                </div>
              </div>
              <div className={classes.childCard}>
                <div className={classes.header}>
                  <ElectricBoltRounded />
                  <Typography variant="h4">Quality Assurance</Typography>
                </div>
                <Divider />
                <div className={classes.content}>
                  <Typography variant="h6">
                    We use top-quality HVAC equipment and follow industry best
                    practices to ensure reliable and long-lasting installations.
                  </Typography>
                </div>
              </div>
              <div className={classes.childCard}>
                <div className={classes.header}>
                  <HourglassEmptyRounded />
                  <Typography variant="h4">Timely Service</Typography>
                </div>
                <Divider />
                <div className={classes.content}>
                  <Typography variant="h6">
                    We understand the importance of timely service and respond
                    promptly to our clients' requests.
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};
