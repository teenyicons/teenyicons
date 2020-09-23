import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignCenterVertical = forwardRef(
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
          d="M7 1H3v6H0v1h3v6h4V8h1v3.5h4V8h3V7h-3V3.5H8V7H7V1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAlignCenterVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignCenterVertical.displayName = "AlignCenterVertical";

export default SvgAlignCenterVertical;
