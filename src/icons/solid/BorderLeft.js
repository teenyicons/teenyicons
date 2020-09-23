import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderLeft = forwardRef(
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
          d="M1 14V1h1v13H1zM5 2H4V1h1v1zm3 0H7V1h1v1zm3 0h-1V1h1v1zm3 0h-1V1h1v1zM8 5H7V4h1v1zm6 0h-1V4h1v1zM5 8H4V7h1v1zm3 0H7V7h1v1zm3 0h-1V7h1v1zm3 0h-1V7h1v1zm-6 3H7v-1h1v1zm6 0h-1v-1h1v1zm-9 3H4v-1h1v1zm3 0H7v-1h1v1zm3 0h-1v-1h1v1zm3 0h-1v-1h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBorderLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderLeft.displayName = "BorderLeft";

export default SvgBorderLeft;
