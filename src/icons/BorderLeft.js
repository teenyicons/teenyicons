import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7 1.5h1m2 0h1m2 0h1m-1 3h1m-7 0h1m5 3h1m-4 0h1m-4 0h1m5 3h1m-7 0h1m5 3h1m-4 0h1m-4 0h1m-4 0h1m-1-6h1m-1-6h1M1.5 1v13"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBorderLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderLeft.displayName = "BorderLeft";

export default SvgBorderLeft;
