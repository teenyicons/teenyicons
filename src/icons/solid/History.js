import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHistory = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 116.965 7.481l.053-.998.49.017a6.5 6.5 0 10-4.65-1.951l.006.007.136.15V10h1v4H0v-1h2.37l-.234-.258A7.477 7.477 0 010 7.5zm7 0V3h1v4.293l2.854 2.853-.708.708-3-3A.5.5 0 017 7.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHistory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHistory.displayName = "History";

export default SvgHistory;
