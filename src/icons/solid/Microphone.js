import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMicrophone = forwardRef(
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
        <path d="M5 2.5a2.5 2.5 0 015 0v4a2.5 2.5 0 01-5 0v-4z" fill={color} />
        <path
          d="M2 4v2.5a5.5 5.5 0 005 5.478V14H5v1h5v-1H8v-2.022A5.5 5.5 0 0013 6.5V4h-1v2.5a4.5 4.5 0 01-9 0V4H2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMicrophone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMicrophone.displayName = "Microphone";

export default SvgMicrophone;
