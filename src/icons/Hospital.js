import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHospital = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l.224-.447a.5.5 0 00-.448 0L7.5.5zm-6 3l-.224-.447A.5.5 0 001 3.5h.5zm12 0h.5a.5.5 0 00-.276-.447L13.5 3.5zm-8 7V10H5v.5h.5zm4 0h.5V10h-.5v.5zM0 15h15v-1H0v1zM7.276.053l-6 3 .448.894 6-3-.448-.894zm6.448 3l-6-3-.448.894 6 3 .448-.894zM7 3v2.5h1V3H7zm0 2.5V8h1V5.5H7zM5 6h2.5V5H5v1zm2.5 0H10V5H7.5v1zM1 3.5v11h1v-11H1zm12 0v11h1v-11h-1zm-7 11v-4H5v4h1zM5.5 11h4v-1h-4v1zm3.5-.5v4h1v-4H9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHospital.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHospital.displayName = "Hospital";

export default SvgHospital;
