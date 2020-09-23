import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLocation = forwardRef(
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
          d="M8 1.018V0H7v1.018a6.5 6.5 0 00-5.981 5.977H0v1h1.019A6.508 6.508 0 007 13.981V15h1v-1.019a6.508 6.508 0 005.981-5.986H15v-1h-1.019A6.5 6.5 0 008 1.018zM8 3v3.995h4v1H8V12H7V7.995H3v-1h4V3h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLocation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLocation.displayName = "Location";

export default SvgLocation;
