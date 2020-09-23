import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAndroid = forwardRef(
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
          d="M7.5 4a6.473 6.473 0 00-2.934.698l-1.65-2.475-.832.554 1.627 2.44A6.492 6.492 0 001 10.5V13h13v-2.5a6.492 6.492 0 00-2.711-5.282l1.627-2.44-.832-.555-1.65 2.475A6.473 6.473 0 007.5 4zM5 10H4V9h1v1zm5 0h1V9h-1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAndroid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAndroid.displayName = "Android";

export default SvgAndroid;
