import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPhonecallReceive = forwardRef(
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
          d="M2.5 0A2.5 2.5 0 000 2.5v2C0 10.299 4.701 15 10.5 15h2a2.5 2.5 0 002.5-2.5v-1.382a1.5 1.5 0 00-.83-1.342l-2.415-1.208a1.5 1.5 0 00-2.094.868l-.298.893a.71.71 0 01-.812.471A5.547 5.547 0 014.2 6.45a.71.71 0 01.471-.812l1.109-.37a1.5 1.5 0 00.98-1.787l-.586-2.344A1.5 1.5 0 004.72 0H2.5z"
          fill={color}
        />
        <path
          d="M14.146.146L9 5.293V3H8v4h4V6H9.707L14.854.854l-.708-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPhonecallReceive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPhonecallReceive.displayName = "PhonecallReceive";

export default SvgPhonecallReceive;
