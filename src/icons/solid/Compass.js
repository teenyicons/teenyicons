import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCompass = forwardRef(
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
          d="M5.618 9.382l1.255-2.51 2.509-1.254-1.255 2.51-2.509 1.254z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm10.947-2.776a.5.5 0 00-.67-.671l-4 2a.5.5 0 00-.224.223l-2 4a.5.5 0 00.67.671l4-2a.5.5 0 00.224-.223l2-4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCompass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCompass.displayName = "Compass";

export default SvgCompass;
