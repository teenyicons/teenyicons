import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCrop = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 3.5h8v8m-8-8V0m0 3.5H0m11.5 8h-8V6m8 5.5V15m0-3.5H15"
          stroke={color}
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
