import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { Component } from "react";

export default class Test extends Component {
  render() {
    return (
      <div className="my-[8vh]">
        <BasicTextFields />
      </div>
    );
  }
}

const re = /^[A-Za-z]+$/;
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]()?\w+)*(\.\w{2,3})+$/;

const services = [
  {
    value: "Hair Tranplant",
    label: "Hair Tranplant",
  },
  {
    value: "Women Hair Tranplant",
    label: "Women Hair Tranplant",
  },
  {
    value: "IGM Hair Tranplant",
    label: "IGM Hair Tranplant",
  },
  {
    value: "DHI Hair Tranplant",
    label: "DHI Hair Tranplant",
  },
  {
    value: "Sapphire Hair Tranplant",
    label: "Sapphire Hair Tranplant",
  },
  {
    value: "Eyebrow Hair Tranplant",
    label: "Eyebrow Hair Tranplant",
  },
  {
    value: "Beard Hair Tranplant",
    label: "Beard Hair Tranplant",
  },
  {
    value: "CC PRP Active Plus",
    label: "CC PRP Active Plus",
  },
  {
    value: "Oxygen LASER Therapy",
    label: "Oxygen LASER Therapy",
  },
  {
    value: "Dr Regrowth",
    label: "Dr Regrowth",
  },
  {
    value: "Crotico - Shot",
    label: "Crotico - Shot",
  },
  {
    value: "Laser Helmet",
    label: "Laser Helmet",
  },
  {
    value: "Meso QR 678",
    label: "Meso QR 678",
  },
  {
    value: "Scalp Detox",
    label: "Scalp Detox",
  },
  {
    value: "Scalp Micropigmentation",
    label: "Scalp Micropigmentation",
  },
  {
    value: "Eyelash Extension",
    label: "Eyelash Extension",
  },
  {
    value: "Eyebrow MicroBlading",
    label: "Eyebrow MicroBlading",
  },
  {
    value: "Tres Pro",
    label: "Tres Pro",
  },
  {
    value: "Celebrity's Choice",
    label: "Celebrity's Choice",
  },
  {
    value: "Satin Lace",
    label: "Satin Lace",
  },
  {
    value: "French Grip",
    label: "French Grip",
  },
  {
    value: "Dura",
    label: "Dura",
  },
];

const Locations = [
  {
    value: "Chennai",
    label: "Chennai",
  },
  {
    value: "Coimbatore",
    label: "Coimbatore",
  },
  {
    value: "Bangalore",
    label: "Bangalore",
  },
  {
    value: "Hyderabad",
    label: "Hyderabad",
  },
  {
    value: "Noida",
    label: "Noida",
  },
  {
    value: "Mumbai",
    label: "Mumbai",
  },
];

const [Form, setForm] = React.useState({
  name: "",
  phone: "",
  email: "",
  location: "",
  service: "",
  message: "",
});

const saveData = () => {
  localStorage.setItem("Form1", JSON.stringify(Form));
};

const onSubmit = () => {
  // e.preventDefault();
  console.log("Form Submitted");
};

// const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { value, name, type, checked } = e.target;
//   setForm((state) => ({
//     ...state,
//     [name]: type === "checkbox" ? checked : value,
//   }));
// };

const valForm = () => {};

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        width: 300,
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      autoComplete="off"
      // onSubmit={onSubmit}
    >
      <TextField
        id="name"
        type="text"
        label="What's your name?"
        variant="outlined"
        fullWidth
        // onChange={onChange}
        value={Form.name}
        // onBlur={checkTitle}
      />
      <TextField
        id="phone"
        type="number"
        label="Tell us your Phone No."
        variant="outlined"
        fullWidth
        // onChange={onChange}
        value={Form.phone}
        // onBlur={checkTitle}
      />
      <TextField
        id="email"
        type="email"
        label="What's your Email"
        variant="outlined"
        fullWidth
        // onChange={onChange}
        value={Form.email}
        // onBlur={checkTitle}
      />
      <TextField
        id="locations"
        select
        label="Locations"
        defaultValue="Chennai"
        fullWidth
        // onChange={onChange}
        value={Form.location}
        // onBlur={checkTitle}
      >
        {Locations.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id=""
        select
        label="Services"
        defaultValue="Hair Tranplant"
        fullWidth
        // onChange={onChange}
        value={Form.service}
        // onBlur={checkTitle}
      >
        {services.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-multiline-static"
        label="Message"
        type="text"
        multiline
        fullWidth
        rows={4}
        // onChange={onChange}
        value={Form.message}
        // onBlur={checkTitle}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}
