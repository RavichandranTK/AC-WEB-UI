import { Typography, createStyles, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      fontWeight: "bold",
    },
    subTitle: {
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      margin: 30,
    },
    bms: {
      margin: 40,
      "& span": {
        width: 1000,
        display: "flex",
        margin: theme.spacing(4, 10),
      },
    },
  })
);
export const WhyChooseUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.bms}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h3"
        component="div"
      >
        Why Choose Us
      </Typography>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Expert Team:
      </Typography>
      <span>
        Our team comprises highly skilled and experienced HVAC professionals who
        are committed to delivering excellence.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Customer-Centric:
      </Typography>
      <span>
        We prioritize our customers' needs, and our solutions are tailored to
        meet their specific requirements.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Energy Efficiency:
      </Typography>
      <span>
        With a strong focus on sustainability, we offer energy-efficient
        solutions to minimize environmental impact and save costs.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Quality Assurance:
      </Typography>
      <span>
        We use top-quality HVAC equipment and follow industry best practices to
        ensure reliable and long-lasting installations..
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Timely Service:
      </Typography>
      <span>
        We understand the importance of timely service and respond promptly to
        our clients' requests.
      </span>
    </div>
  );
};
