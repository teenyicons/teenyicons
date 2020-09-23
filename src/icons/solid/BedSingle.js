import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBedSingle = forwardRef(
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
        <path d="M0 15h1v-4h13v4h1V4h-1v3H1V0H0v15z" fill={color} />
        <path d="M6 6H2V5h4v1z" fill={color} />
      </svg>
    );
  }
);

SvgBedSingle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBedSingle.displayName = "BedSingle";

export default SvgBedSingle;
