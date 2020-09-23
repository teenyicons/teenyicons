import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCrop = forwardRef(
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
          d="M3 3V0h1v3h8v8h3v1h-3v3h-1v-3H3V6h1v5h7V4H0V3h3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCrop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCrop.displayName = "Crop";

export default SvgCrop;
