import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShieldX = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 4.5l6 6m-6 0l6-6m-3-4l-7 4v.72a9.651 9.651 0 007 9.28 9.651 9.651 0 007-9.28V4.5l-7-4z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgShieldX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgShieldX.displayName = "ShieldX";

export default SvgShieldX;
