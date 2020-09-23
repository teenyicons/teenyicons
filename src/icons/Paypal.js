import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPaypal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 12.5h4l1-4h1.795a4.625 4.625 0 004.33-3.001C12.532 3.08 10.745.5 8.161.5H3.5l-3 12z"
          stroke={color}
          strokeLinejoin="round"
        />
        <path
          d="M4 14.5h4L9 11h1.577c1.477 0 2.82-.859 3.438-2.2.927-2.008-.54-4.3-2.75-4.3H6.5L4 14.5z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgPaypal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPaypal.displayName = "Paypal";

export default SvgPaypal;
