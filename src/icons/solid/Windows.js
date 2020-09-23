import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWindows = forwardRef(
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
          d="M14.814.111A.5.5 0 0115 .5V7H7V1.596L14.395.01a.5.5 0 01.42.1zM6 1.81L.395 3.011A.5.5 0 000 3.5V7h6V1.81zM0 8v4.5a.5.5 0 00.43.495l5.57.796V8H0zM7 13.934l7.43 1.061A.5.5 0 0015 14.5V8H7v5.934z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWindows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWindows.displayName = "Windows";

export default SvgWindows;
