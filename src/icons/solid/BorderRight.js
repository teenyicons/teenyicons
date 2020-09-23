import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderRight = forwardRef(
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
          d="M2 2H1V1h1v1zm3 0H4V1h1v1zm3 0H7V1h1v1zm3 0h-1V1h1v1zm2 12V1h1v13h-1zM2 5H1V4h1v1zm6 0H7V4h1v1zM2 8H1V7h1v1zm3 0H4V7h1v1zm3 0H7V7h1v1zm3 0h-1V7h1v1zm-9 3H1v-1h1v1zm6 0H7v-1h1v1zm-6 3H1v-1h1v1zm3 0H4v-1h1v1zm3 0H7v-1h1v1zm3 0h-1v-1h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBorderRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderRight.displayName = "BorderRight";

export default SvgBorderRight;
