import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShield = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 4.5l7-4 7 4v.72a9.651 9.651 0 01-7 9.28 9.651 9.651 0 01-7-9.28V4.5z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgShield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgShield.displayName = "Shield";

export default SvgShield;
