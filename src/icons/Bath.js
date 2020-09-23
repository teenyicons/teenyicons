import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBath = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M0 7.5h15m-10.5 5h6m-6 0a3 3 0 01-3-3v-6a3 3 0 013-3h2V2m-2 10.5V15m6-2.5a3 3 0 003-3v-2m-3 5V15M5 3.5h3"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBath.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBath.displayName = "Bath";

export default SvgBath;
