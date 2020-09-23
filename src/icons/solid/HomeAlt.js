import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHomeAlt = forwardRef(
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
          d="M7.854.146a.5.5 0 00-.708 0L1 6.293V13.5A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5V6.293L7.854.146z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHomeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHomeAlt.displayName = "HomeAlt";

export default SvgHomeAlt;
