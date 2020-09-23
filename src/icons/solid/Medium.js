import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMedium = forwardRef(
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
          d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-12zM4 5H3V4h1.5a.5.5 0 01.4.2l2.6 3.467 2.593-3.458A.5.5 0 0110.5 4H12v1h-1v5h1v1H9v-1h1V6L7.5 9.333 5 6v4h1v1H3v-1h1V5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMedium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMedium.displayName = "Medium";

export default SvgMedium;
