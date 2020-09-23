import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayersDifference = forwardRef(
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
          d="M4 4V1.5A1.5 1.5 0 015.5 0h8A1.5 1.5 0 0115 1.5v8a1.5 1.5 0 01-1.5 1.5H11v2.5A1.5 1.5 0 019.5 15h-8A1.5 1.5 0 010 13.5v-8A1.5 1.5 0 011.5 4H4zm6 1v5H5V5h5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLayersDifference.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLayersDifference.displayName = "LayersDifference";

export default SvgLayersDifference;
