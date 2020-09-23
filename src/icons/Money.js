import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoney = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M11 10.5h1.5V9M11 4.5h1.5V6M4 4.5H2.5V6m0 3v1.5H4m3.5-1a2 2 0 110-4 2 2 0 010 4zm-6-7h12a1 1 0 011 1v8a1 1 0 01-1 1h-12a1 1 0 01-1-1v-8a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMoney.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoney.displayName = "Money";

export default SvgMoney;
