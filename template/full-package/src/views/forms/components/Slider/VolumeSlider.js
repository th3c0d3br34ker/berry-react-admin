import React from "react";

// material-ui
import { Grid, Slider } from "@material-ui/core";

// assets
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

//-----------------------|| VOLUME SLIDER ||-----------------------//

export default function VolumeSlider() {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <VolumeDown color="primary" />
      </Grid>
      <Grid item xs>
        <Slider
          value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
      </Grid>
      <Grid item>
        <VolumeUp color="primary" />
      </Grid>
    </Grid>
  );
}
