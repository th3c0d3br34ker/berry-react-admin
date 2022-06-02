import PropTypes from "prop-types";
import React from "react";

// material-ui
import { Collapse, Fade, Grow, Slide, Zoom } from "@material-ui/core";

//-----------------------|| TRANSITIONS ||-----------------------//

const Transitions = React.forwardRef(
  ({ children, position, type, direction, ...others }, ref) => {
    let positionSX = {
      transformOrigin: "0 0 0",
    };

    switch (position) {
      case "top-right":
        positionSX = {
          transformOrigin: "top right",
        };
        break;
      case "top":
        positionSX = {
          transformOrigin: "top",
        };
        break;
      case "bottom-left":
        positionSX = {
          transformOrigin: "bottom left",
        };
        break;
      case "bottom-right":
        positionSX = {
          transformOrigin: "bottom right",
        };
        break;
      case "bottom":
        positionSX = {
          transformOrigin: "bottom",
        };
        break;
      case "top-left":
      default:
        positionSX = {
          transformOrigin: "0 0 0",
        };
        break;
    }

    return (
      <React.Fragment ref={ref}>
        {type === "grow" && (
          <Grow {...others} sx={positionSX}>
            {children}
          </Grow>
        )}
        {type === "collapse" && (
          <Collapse {...others} sx={positionSX}>
            {children}
          </Collapse>
        )}
        {type === "fade" && (
          <Fade
            {...others}
            timeout={{
              appear: 500,
              enter: 600,
              exit: 400,
            }}
            sx={positionSX}
          >
            {children}
          </Fade>
        )}
        {type === "slide" && (
          <Slide
            {...others}
            timeout={{
              appear: 0,
              enter: 400,
              exit: 200,
            }}
            direction={direction}
            sx={{ positionSX }}
          >
            {children}
          </Slide>
        )}
        {type === "zoom" && (
          <Zoom {...others} sx={positionSX}>
            {children}
          </Zoom>
        )}
      </React.Fragment>
    );
  }
);

Transitions.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["grow", "fade", "collapse", "slide", "zoom"]),
  position: PropTypes.oneOf([
    "top-left",
    "top-right",
    "top",
    "bottom-left",
    "bottom-right",
    "bottom",
  ]),
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
};

Transitions.defaultProps = {
  type: "grow",
  position: "top-left",
  direction: "up",
};

export default Transitions;
