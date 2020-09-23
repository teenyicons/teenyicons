import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPinterest = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 13.5l3-7m-3.236 3a2.989 2.989 0 01-.764-2V7A3.5 3.5 0 017 3.5h1A3.5 3.5 0 0111.5 7v.5a3 3 0 01-3 3 2.081 2.081 0 01-1.974-1.423L6.5 9m1 5.5a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPinterest.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPinterest.displayName = "Pinterest";

export default SvgPinterest;
