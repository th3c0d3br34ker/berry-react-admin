import React from "react";

// material-ui
import { Button, Grid, MenuItem, TextField } from "@material-ui/core";

// project imports
import SubCard from "./../../../../../ui-component/cards/SubCard";
import AnimateButton from "./../../../../../ui-component/extended/AnimateButton";
import { gridSpacing } from "../../../../../store/constant";

// assets
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// select options
const currencies = [
  {
    value: "Washington",
    label: "Washington",
  },
  {
    value: "India",
    label: "India",
  },
  {
    value: "Africa",
    label: "Africa",
  },
  {
    value: "New-York",
    label: "New York",
  },
  {
    value: "Malaysia",
    label: "Malaysia",
  },
];

const experiences = [
  {
    value: "Startup",
    label: "Startup",
  },
  {
    value: "2-year",
    label: "2 year",
  },
  {
    value: "3-year",
    label: "3 year",
  },
  {
    value: "4-year",
    label: "4 year",
  },
  {
    value: "5-year",
    label: "5 year",
  },
];

//-----------------------|| PROFILE 1 - PROFILE ACCOUNT ||-----------------------//

const PersonalAccount = () => {
  const [currency, setCurrency] = React.useState("Washington");
  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  const [experience, setExperience] = React.useState("Startup");
  const handleChange2 = (event) => {
    setExperience(event.target.value);
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6}>
        <SubCard title="Personal Information">
          <form noValidate autoComplete="off">
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic1"
                  fullWidth
                  label="Name"
                  variant="outlined"
                  defaultValue="Asoka Tana"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  fullWidth
                  label="Location"
                  value={currency}
                  onChange={handleChange1}
                  variant="outlined"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static1"
                  label="Bio"
                  multiline
                  fullWidth
                  rows={3}
                  defaultValue="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-select-experience"
                  select
                  fullWidth
                  label="Experience"
                  value={experience}
                  onChange={handleChange2}
                  variant="outlined"
                >
                  {experiences.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </form>
        </SubCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <SubCard title="Contact Information">
          <form noValidate autoComplete="off">
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic2"
                  fullWidth
                  label="Contact Phone"
                  variant="outlined"
                  defaultValue="(+99) 9999 999 999"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic3"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  defaultValue="demo@sample.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic4"
                  fullWidth
                  label="Portfolio Url"
                  variant="outlined"
                  defaultValue="https://demo.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static2"
                  label="Address"
                  multiline
                  fullWidth
                  rows={3}
                  defaultValue="3379  Monroe Avenue, Fort Myers, Florida(33912)"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </form>
        </SubCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <SubCard title="Social Information">
          <form noValidate autoComplete="off">
            <Grid
              container
              alignItems="center"
              spacing={gridSpacing}
              sx={{ mb: "10px" }}
            >
              <Grid item>
                <FacebookIcon />
              </Grid>
              <Grid item xs zeroMinWidth>
                <TextField fullWidth label="Facebook Profile Url" />
              </Grid>
              <Grid item>
                <AnimateButton>
                  <Button variant="contained" size="small" color="secondary">
                    Connect
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="center"
              spacing={gridSpacing}
              sx={{ mb: "10px" }}
            >
              <Grid item>
                <TwitterIcon />
              </Grid>
              <Grid item xs zeroMinWidth>
                <TextField fullWidth label="Twitter Profile Url" />
              </Grid>
              <Grid item>
                <AnimateButton>
                  <Button variant="contained" size="small" color="secondary">
                    Connect
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={gridSpacing}>
              <Grid item>
                <LinkedInIcon />
              </Grid>
              <Grid item xs zeroMinWidth>
                <TextField fullWidth label="LinkedIn Profile Url" />
              </Grid>
              <Grid item>
                <AnimateButton>
                  <Button variant="contained" size="small" color="secondary">
                    Connect
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default PersonalAccount;
