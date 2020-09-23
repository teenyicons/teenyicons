import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLightningCable = forwardRef(
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
          d="M5.5 0A1.5 1.5 0 004 1.5V5h7V1.5A1.5 1.5 0 009.5 0h-4zM6 2h3v1H6V2z"
          fill={color}
        />
        <path
          d="M3 6h9v5.5a1.5 1.5 0 01-1.5 1.5H10v2H9v-2H6v2H5v-2h-.5A1.5 1.5 0 013 11.5V6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLightningCable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLightningCable.displayName = "LightningCable";

export default SvgLightningCable;
