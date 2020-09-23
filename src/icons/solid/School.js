import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSchool = forwardRef(
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
        <path d="M7.5 8a.5.5 0 100 1 .5.5 0 000-1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.191l-4-2V3h3V0H7v4.191l-4 2V8H1v6H0v1h6v-4h3v4h6v-1h-1V8h-2V6.191zM13 14V9h-1v5h1zM3 14H2V9h1v5zm3-5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
        />
        <path d="M8 15v-3H7v3h1z" fill={color} />
      </svg>
    );
  }
);

SvgSchool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSchool.displayName = "School";

export default SvgSchool;
