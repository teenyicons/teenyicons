import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayersSubtract = forwardRef(
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
          d="M4 4H1.5A1.5 1.5 0 000 5.5v8A1.5 1.5 0 001.5 15h8a1.5 1.5 0 001.5-1.5V11h2.5A1.5 1.5 0 0015 9.5v-8A1.5 1.5 0 0013.5 0h-8A1.5 1.5 0 004 1.5V4zm1-2.5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-8z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLayersSubtract.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLayersSubtract.displayName = "LayersSubtract";

export default SvgLayersSubtract;
