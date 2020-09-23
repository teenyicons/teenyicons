import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTopLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 1.5V1a.5.5 0 00-.5.5h.5zm0 .5H7V1H1.5v1zM1 1.5V7h1V1.5H1zm.146.354l12 12 .707-.708-12-12-.707.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTopLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTopLeft.displayName = "TopLeft";

export default SvgTopLeft;
