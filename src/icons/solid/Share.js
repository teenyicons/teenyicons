import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShare = forwardRef(
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
          d="M10 2.499a2.5 2.5 0 015 0 2.5 2.5 0 01-3.566 2.26L9.131 7.52l2.038 2.858A2.5 2.5 0 0115 12.493a2.5 2.5 0 11-4.559-1.417L8.246 8H4.949A2.501 2.501 0 010 7.495 2.5 2.5 0 014.95 7h3.312l2.37-2.84A2.488 2.488 0 0110 2.499z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgShare.displayName = "Share";

export default SvgShare;
