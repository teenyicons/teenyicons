import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChurch = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3 8.5a.5.5 0 00-1 0h1zm10 0a.5.5 0 00-1 0h1zm-7.5 2V10H5v.5h.5zm4 0h.5V10h-.5v.5zM0 15h15v-1H0v1zm7.252-9.934l-7 4 .496.868 7-4-.496-.868zm7.496 4l-7-4-.496.868 7 4 .496-.868zM7 0v2.5h1V0H7zm0 2.5v3h1v-3H7zM5 3h2.5V2H5v1zm2.5 0H10V2H7.5v1zM2 8.5v6h1v-6H2zm10 0v6h1v-6h-1zm-6 6v-4H5v4h1zM5.5 11h4v-1h-4v1zm3.5-.5v4h1v-4H9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgChurch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgChurch.displayName = "Church";

export default SvgChurch;
