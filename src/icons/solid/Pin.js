import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPin = forwardRef(
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
        <path d="M6 6.496a1.5 1.5 0 013 0 1.5 1.5 0 01-3 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 6.496A6.499 6.499 0 017.5 0C11.089 0 14 2.909 14 6.496c0 2.674-1.338 4.793-2.772 6.225a10.865 10.865 0 01-2.115 1.654c-.322.19-.623.34-.885.442-.247.098-.506.174-.728.174-.222 0-.481-.076-.728-.174a6.453 6.453 0 01-.885-.442 10.868 10.868 0 01-2.115-1.654C2.338 11.289 1 9.17 1 6.496zm6.5-2.499a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 005 0 2.5 2.5 0 00-2.5-2.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPin.displayName = "Pin";

export default SvgPin;
