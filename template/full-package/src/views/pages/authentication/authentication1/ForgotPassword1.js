import React from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

// project imports
import AuthWrapper1 from "./../AuthWrapper1";
import AuthCardWrapper from "./../AuthCardWrapper";
import Logo from "./../../../../ui-component/Logo";
import FirebaseForgotPassword from "./../firebase-forms/FirebaseForgotPassword";
import BackgroundPattern1 from "./../../../../ui-component/cards/BackgroundPattern1";
import Carousel from "./../../../../ui-component/third-party/Carousel";

// assets
import AuthMultiCard from "./../../../../assets/images/auth/auth-forgot-pass-multi-card.svg";

// style constant
const useStyles = makeStyles((theme) => ({
  authPurpleCard: {
    "&:before": {
      content: '""',
      position: "absolute",
      top: "18%",
      left: "18%",
      width: "515px",
      height: "470px",
      backgroundImage: `url(${AuthMultiCard})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      animation: "15s wings ease-in-out infinite",
      animationDelay: "1s",
      [theme.breakpoints.down("lg")]: {
        top: "10%",
        left: "6%",
        backgroundSize: "450px",
      },
    },
  },
}));

// carousel items
const items = [
  {
    title: "Powerful and easy to use multipurpose theme.",
    description: "Powerful and easy to use multipurpose theme",
  },
  {
    title: "Power of React with Material UI",
    description: "Powerful and easy to use multipurpose theme",
  },
  {
    title: "Power of React with Material UI",
    description: "Powerful and easy to use multipurpose theme",
  },
];

//============================|| AUTH1 - FORGOT PASSWORD ||============================//

const ForgotPassword = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AuthWrapper1>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid
          item
          container
          justifyContent="center"
          md={6}
          lg={7}
          sx={{ my: 3 }}
        >
          <AuthCardWrapper>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <Grid
                  container
                  direction={matchDownSM ? "column-reverse" : "row"}
                  alignItems={matchDownSM && "center"}
                  justifyContent={matchDownSM ? "center" : "space-between"}
                >
                  <Grid item>
                    <Stack
                      justifyContent={matchDownSM ? "center" : "flex-start"}
                      textAlign={matchDownSM ? "center" : ""}
                    >
                      <Typography
                        color={theme.palette.secondary.main}
                        gutterBottom
                        variant={matchDownSM ? "h3" : "h2"}
                      >
                        Forgot password?
                      </Typography>
                      <Typography color="textPrimary" gutterBottom variant="h4">
                        Enter credentials to continue
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ mb: { xs: 3, sm: 0 } }}>
                    <RouterLink to="#">
                      <Logo />
                    </RouterLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent={matchDownSM ? "center" : "flex-start"}
                >
                  <Typography
                    variant="caption"
                    fontSize="16px"
                    textAlign={matchDownSM ? "center" : ""}
                  >
                    Enter your email address below and we'll send you password
                    reset OTP.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <FirebaseForgotPassword />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid
                  item
                  container
                  direction="column"
                  alignItems="flex-end"
                  xs={12}
                >
                  <Typography
                    component={RouterLink}
                    to="/pages/login/login1"
                    variant="subtitle1"
                    sx={{ textDecoration: "none" }}
                  >
                    Have an account?
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </AuthCardWrapper>
        </Grid>
        <Grid
          item
          md={6}
          lg={5}
          sx={{
            position: "relative",
            alignSelf: "stretch",
            display: { xs: "none", md: "block" },
          }}
        >
          <BackgroundPattern1>
            <Grid item container direction="column" justifyContent="flex-end">
              <Grid item>
                <span className={classes.authBlue}></span>
                <span className={classes.authPurpleCard}></span>
              </Grid>
              <Grid item>
                <Box pb={10}>
                  <Carousel items={items} />
                </Box>
              </Grid>
            </Grid>
          </BackgroundPattern1>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default ForgotPassword;
