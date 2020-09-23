import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStamp = forwardRef(
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
          d="M4 3.5a3.5 3.5 0 115 3.163V9h3.5a2.5 2.5 0 012.5 2.5V13H0v-1.5A2.5 2.5 0 012.5 9H6V6.663A3.5 3.5 0 014 3.5zM0 14v1h15v-1H0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgStamp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStamp.displayName = "Stamp";

export default SvgStamp;
