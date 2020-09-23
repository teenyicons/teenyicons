import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPower = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 8.5v-8M2.618 2.499A6.963 6.963 0 00.5 7.495c0 3.864 3.135 7.005 7 7.005 3.867 0 7-3.141 7-7.005A6.968 6.968 0 0012.395 2.5"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgPower.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPower.displayName = "Power";

export default SvgPower;
