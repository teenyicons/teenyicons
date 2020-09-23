import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgScreenAlt2 = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 0A1.5 1.5 0 000 1.5v8A1.5 1.5 0 001.5 11H5v3H2v1h11v-1h-3v-3h3.5A1.5 1.5 0 0015 9.5v-8A1.5 1.5 0 0013.5 0h-12zM6 14v-3h3v3H6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgScreenAlt2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgScreenAlt2.displayName = "ScreenAlt2";

export default SvgScreenAlt2;
