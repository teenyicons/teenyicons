import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRupee = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 8.5V8a.5.5 0 00-.325.88L2.5 8.5zM2 1h11V0H2v1zm.5 8h3V8h-3v1zm3-9h-3v1h3V0zM2.175 8.88l7 6 .65-.76-7-6-.65.76zM10 4.5A4.5 4.5 0 005.5 0v1A3.5 3.5 0 019 4.5h1zM5.5 9A4.5 4.5 0 0010 4.5H9A3.5 3.5 0 015.5 8v1zM2 5h11V4H2v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRupee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRupee.displayName = "Rupee";

export default SvgRupee;
