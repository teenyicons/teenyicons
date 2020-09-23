import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBedDouble = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 7v8M.5 7v8M0 10.5h15m-15-3h15m-13-2h4m3 0h4M.5 6V.5h14V6"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBedDouble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBedDouble.displayName = "BedDouble";

export default SvgBedDouble;
