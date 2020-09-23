import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAndroid = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 2.5l2 3m8-3l-2 3M4 9.5h1m5 0h1m-9.5 3v-2a6 6 0 1112 0v2h-12z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAndroid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAndroid.displayName = "Android";

export default SvgAndroid;
