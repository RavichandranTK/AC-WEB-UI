import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { PRODUCTS } from "../get-in-touch/GetInTouchConstent";
import OfficeImg from "../../assets/images/officeImg.jpg";
import clsx from "clsx";
import { APP_MAIN_COLOR, COLOR_BLACK, COLOR_WHITE, FONT_FAMILY } from "../constant/AppConstat";

const useStyles = makeStyles((theme) => ({
  actions: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 10,
    "& .MuiButton-root": {
      borderRadius: 16,
      color: APP_MAIN_COLOR,
      fontWeight: "bold",
    },
    "& .MuiButton-outlinedPrimary": {
      border: `2px solid ${APP_MAIN_COLOR}`
    },
    
    "& .MuiButton-root:hover": {
      backgroundColor: APP_MAIN_COLOR,
      color: COLOR_WHITE,
      fontWeight: "bold",
      "& .MuiButton-outlinedPrimary": {
        border: `2px solid ${COLOR_BLACK}`
      },
    },
  },
  contactForm: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "1rem",
    margin: "30px 0",
    [theme.breakpoints.down(850)]: {
      flexDirection: "column",
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: theme.spacing(3),
    boxShadow:
      "4px 4px 4px 4px rgb(0 0 0 / 20%), 3px 1px 1px 0px rgb(0 0 0 / 14%), 0px 4px 0px 0px rgb(0 0 0 / 12%)",
  },
  contactFormChild: {
    width: "70%",
    padding: 30,
  },
  contactFormChild1: {
    "& img": {
      minWidth: 400,
      maxWidth: 1000,
      [theme.breakpoints.down(850)]: {
        minWidth: 300,
        maxWidth: 600,
      },
    },
  },
  officeImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  childContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    [theme.breakpoints.down(850)]: {
      flexDirection: "column",
      "& .field": {
        flex: "1 0 75px !important",
      },
    },
    "& .field": {
      flex: "1 0 150px",
    },
  },
  reachUs: {
    textDecoration: "underline",
    fontWeight: "bold",
    fontFamily: FONT_FAMILY,
    color: APP_MAIN_COLOR,
  },
}));

export const ContactUsForm = () => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  const [indianStates, setIndianStates] = useState([]);
  const [product, setProduct] = useState("");
  const [indianStateValue, setIndianStateValue] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const classes = useStyles({ accordianOpen });
  const getStates = async () => {
    const res = await fetch(
      "https://cdn-api.co-vin.in/api/v2/admin/location/states"
    );
    const res_1 = await res.json();
    const value = res_1.states.map((item) => ({
      id: item.state_id,
      value: item.state_name,
    }));
    setIndianStates(value);
  };

  const submitInfo = () => {
    if (userName === "") {
      setError("userName");
      return false;
    } else if (email === "") {
      setError("email");
      return false;
    } else if (phoneNumber === "") {
      setError("phoneNumber");
      return false;
    } else {
      setError("");
    }
    setAccordianOpen(false);
    resetAllValue();
  };

  const resetAllValue = () => {
    setProduct("");
    setIndianStateValue("");
    setUserName("");
    setEmail("");
    setPhoneNumber("");
    setCity("");
    setMessage("");
  };

  useEffect(() => {
    getStates();
  }, []);

  return (
    <div className={classes.contactForm}>
      <div className={classes.contactFormChild}>
        <div className={classes.formContainer}>
          <Typography className={classes.reachUs} variant="h5">REACH US:</Typography>
          <div className={classes.childContainer}>
            <TextField
              label="Name"
              placeholder="Enter your name"
              variant="outlined"
              required
              className="field nameField"
              color={error === "userName" && "error"}
              error={error === "userName"}
              id={error === "userName" && "outlined-error-helper-text"}
              helperText={error === "userName" && "Please enter the user name"}
              value={userName}
              onChange={(e) => setUserName(e?.target?.value)}
            />
            <TextField
              label="Email"
              placeholder="Enter your email"
              variant="outlined"
              required
              className="field emailField"
              color={error === "email" && "error"}
              error={error === "email"}
              id={error === "email" && "outlined-error-helper-text"}
              helperText={error === "email" && "Please enter the email"}
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
            />
            <TextField
              label="Phone"
              placeholder="Enter your phone"
              variant="outlined"
              required
              className="field phoneField"
              color={error === "phoneNumber" && "error"}
              error={error === "phoneNumber"}
              id={error === "phoneNumber" && "outlined-error-helper-text"}
              helperText={
                error === "phoneNumber" && "Please enter the phone number"
              }
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e?.target?.value)}
            />
          </div>

          <div className={classes.childContainer}>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl, "field productField")}
            >
              <InputLabel htmlFor="outlined-products-native-simple">
                Products
              </InputLabel>
              <Select
                native
                onChange={(e) => {
                  setProduct(e?.target?.value);
                  setAccordianOpen(true);
                }}
                label="Products"
                value={product}
                inputProps={{
                  name: "products",
                  id: "outlined-products-native-simple",
                }}
              >
                <option aria-label="Select" value="" />
                {PRODUCTS?.map(({ id, value }) => {
                  return <option value={id}>{value}</option>;
                })}
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl, "field stateField")}
            >
              <InputLabel htmlFor="outlined-state-native-simple">
                State
              </InputLabel>
              <Select
                native
                onChange={(e) => {
                  setIndianStateValue(e?.target?.value);
                  setAccordianOpen(true);
                }}
                label="State"
                value={indianStateValue}
                inputProps={{
                  name: "state",
                  id: "outlined-state-native-simple",
                }}
              >
                <option aria-label="Select" value="" />
                {indianStates?.map(({ id, value }) => {
                  return <option value={id}>{value}</option>;
                })}
              </Select>
            </FormControl>
            <TextField
              label="City"
              placeholder="Enter your city"
              variant="outlined"
              className="field cityField"
              value={city}
              onChange={(e) => setCity(e?.target?.value)}
            />
          </div>
          <TextField
            label="Message"
            placeholder="Message"
            variant="outlined"
            value={message}
            maxRows={10}
            multiline
            onChange={(e) => setMessage(e?.target?.value)}
          />
          <div className={classes.actions}>
            <Button
              variant="outlined"
              color="primary"
              onClick={submitInfo}
              size="small"
            >
              SUBMIT MESSAGE
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.contactFormChild1}>
        <img
          alt="contact-us"
          src={OfficeImg}
          className={classes.officeImg}
        ></img>
      </div>
    </div>
  );
};
