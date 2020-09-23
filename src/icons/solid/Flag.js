import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFlag = forwardRef(
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
          d="M0 .5A.5.5 0 01.5 0h14a.5.5 0 01.457.703L13.047 5l1.91 4.297A.5.5 0 0114.5 10H1v5H0V.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFlag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFlag.displayName = "Flag";

export default SvgFlag;
