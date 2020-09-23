import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderInner = forwardRef(
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
          d="M2 2H1V1h1v1zm3 0H4V1h1v1zm2 5H1v1h6v6h1V8h6V7H8V1H7v6zm4-5h-1V1h1v1zm3 0h-1V1h1v1zM2 5H1V4h1v1zm12 0h-1V4h1v1zM2 11H1v-1h1v1zm12 0h-1v-1h1v1zM2 14H1v-1h1v1zm3 0H4v-1h1v1zm6 0h-1v-1h1v1zm3 0h-1v-1h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBorderInner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderInner.displayName = "BorderInner";

export default SvgBorderInner;
