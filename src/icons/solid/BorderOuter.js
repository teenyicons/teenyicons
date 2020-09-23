import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderOuter = forwardRef(
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
          d="M1 1h13v13H1V1zm1 1v11h11V2H2zm6 3H7V4h1v1zM5 8H4V7h1v1zm3 0H7V7h1v1zm3 0h-1V7h1v1zm-3 3H7v-1h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBorderOuter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderOuter.displayName = "BorderOuter";

export default SvgBorderOuter;
