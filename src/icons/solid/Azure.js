import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAzure = forwardRef(
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
          d="M7.97.67a.5.5 0 00-.824-.524l-4 4a.5.5 0 00-.106.157l-3 7A.5.5 0 00.5 12h3a.5.5 0 00.47-.33l4-11zM9.955 2.293a.5.5 0 00-.92.021l-2 5A.5.5 0 007.1 7.8l2.584 3.445-5.342 1.78A.5.5 0 004.5 14h10a.5.5 0 00.455-.707l-5-11z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAzure.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAzure.displayName = "Azure";

export default SvgAzure;
