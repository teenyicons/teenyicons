import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSignin = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10.5 7.5l-3 3.25m3-3.25l-3-3m3 3H1m6-6h6.5v12H7"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSignin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSignin.displayName = "Signin";

export default SvgSignin;
