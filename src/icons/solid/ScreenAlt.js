import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgScreenAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          d="M1.5 0A1.5 1.5 0 000 1.5v8A1.5 1.5 0 001.5 11H7v3H2v1h11v-1H8v-3h5.5A1.5 1.5 0 0015 9.5v-8A1.5 1.5 0 0013.5 0h-12z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgScreenAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgScreenAlt.displayName = "ScreenAlt";

export default SvgScreenAlt;
