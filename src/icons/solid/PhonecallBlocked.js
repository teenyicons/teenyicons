import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPhonecallBlocked = forwardRef(
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
          d="M0 2.5A2.5 2.5 0 012.5 0h2.22a1.5 1.5 0 011.454 1.136L6.76 3.48a1.5 1.5 0 01-.98 1.787l-1.109.37a.71.71 0 00-.471.812A5.547 5.547 0 008.55 10.8a.71.71 0 00.812-.471l.298-.893a1.5 1.5 0 012.094-.868l2.416 1.208A1.5 1.5 0 0115 11.118V12.5a2.5 2.5 0 01-2.5 2.5h-2C4.701 15 0 10.299 0 4.5v-2z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 3.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM11.5 1a2.5 2.5 0 00-2.086 3.879l3.465-3.465A2.488 2.488 0 0011.5 1zm0 5c-.51 0-.983-.152-1.379-.414l3.465-3.465A2.5 2.5 0 0111.5 6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPhonecallBlocked.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPhonecallBlocked.displayName = "PhonecallBlocked";

export default SvgPhonecallBlocked;
