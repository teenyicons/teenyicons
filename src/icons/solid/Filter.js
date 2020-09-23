import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFilter = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 3H0V2h15v1zm-3 5H3V7h9v1zm-2 5H5v-1h5v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFilter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFilter.displayName = "Filter";

export default SvgFilter;
