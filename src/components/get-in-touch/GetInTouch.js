import {
  Button,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Add, Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { PRODUCTS } from "./GetInTouchConstent";
import { APP_MAIN_COLOR, COLOR_WHITE } from "../constant/AppConstat";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  getInTouchContainer: {},
  getInTouch: {
    display: ({ hideGetinTouch }) => hideGetinTouch && "none",
    position: "fixed",
    right: 0,
    top: "30%",
    zIndex: 3,
    fontSize: 12,
    backgroundColor: APP_MAIN_COLOR,
    cursor: "pointer",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    boxShadow: "0 0 10px 4px rgb(19 19 19 / 75%)",
    [theme.breakpoints.down(800)]: {
      width: ({ accordianOpen }) =>
        accordianOpen ? "300px !important" : "125px !important",
    },
    "& svg": {
      fill: "#1a1a1a",
    },
  },
  heading: {
    height: 50,
    gap: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
  helper: {
    padding: theme.spacing(1, 2),
    "& .MuiFormControl-root": {
      width: "100%",
      margin: 4,
    },
    "& .MuiInputLabel-outlined": {
      backgroundColor: "#fff",
    },
    "& .MuiMenu-paper": {
      width: 100,
      maxHeight: "calc(100% - 264px)",
    },
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  actions: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: 10,
    "& .MuiButton-root": {
      borderRadius: 16,
    },
  },
  iconContainer: {
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "10%",
    top: 10,
    "&:hover": {
      backgroundColor: "#309186",
    },
    "& path": {
      fill: COLOR_WHITE,
    },
  },
  textContainer: {
    display: "flex",
    gap: 10,
    marginLeft: 20,
  },
}));

export const GetInTouch = () => {
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
  const { pathname } = useLocation();
  const hideGetinTouch = pathname === "/contact-us";

  const classes = useStyles({ accordianOpen, hideGetinTouch });
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
    <div
      style={{ width: accordianOpen ? 300 : 150 }}
      className={classes.getInTouch}
    >
      <div className={classes.textContainer}>
        <Typography className={classes.heading}>REACH US</Typography>
        <span className={classes.iconContainer}>
          {accordianOpen ? (
            <Close onClick={() => setAccordianOpen(false)} />
          ) : (
            <Add onClick={() => setAccordianOpen(true)} />
          )}
        </span>
      </div>
      <div
        style={{ display: accordianOpen ? "block" : "none" }}
        className={classes.details}
      >
        <div className={classes.helper}>
          <TextField
            label="Name"
            placeholder="Enter your name"
            variant="outlined"
            required
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
            type="email"
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
            type="number"
            color={error === "phoneNumber" && "error"}
            error={error === "phoneNumber"}
            id={error === "phoneNumber" && "outlined-error-helper-text"}
            helperText={
              error === "phoneNumber" && "Please enter the phone number"
            }
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e?.target?.value)}
          />
          <FormControl variant="outlined" className={classes.formControl}>
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
          <FormControl variant="outlined" className={classes.formControl}>
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
            value={city}
            onChange={(e) => setCity(e?.target?.value)}
          />
          <TextField
            label="Message"
            placeholder="Message"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e?.target?.value)}
          />
        </div>
        <div className={classes.actions}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setAccordianOpen(false);
              resetAllValue();
            }}
            size="small"
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={submitInfo}
            size="small"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};
