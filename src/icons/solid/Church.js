import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChurch = forwardRef(
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
          d="M7 2V0h1v2h2v1H8v2.21l6.748 3.856-.496.868L13 9.22V14h2v1h-5v-5H5v5H0v-1h2V9.219l-1.252.715-.496-.868L7 5.21V3H5V2h2z"
          fill={color}
        />
        <path d="M6 15h3v-4H6v4z" fill={color} />
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
