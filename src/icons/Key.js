import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgKey = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 14.5l8-8m-6 6l2 2m0-4l2 2m4.5-5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgKey.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgKey.displayName = "Key";

export default SvgKey;
