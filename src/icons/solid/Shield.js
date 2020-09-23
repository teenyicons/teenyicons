import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShield = forwardRef(
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
          d="M7.748.066a.5.5 0 00-.496 0l-7 4A.5.5 0 000 4.5v.72c0 4.532 3.005 8.516 7.363 9.76a.5.5 0 00.274 0A10.152 10.152 0 0015 5.22V4.5a.5.5 0 00-.252-.434l-7-4z"
          fill={color}
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
