import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPen = forwardRef(
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
          d="M2 0h11v.5a5.482 5.482 0 01-1.874 4.134l1.968 3.93L8 14.672V8.994H7v5.678L1.907 8.564l1.967-3.93A5.482 5.482 0 012 .5V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPen.displayName = "Pen";

export default SvgPen;
