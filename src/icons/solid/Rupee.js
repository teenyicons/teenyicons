import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRupee = forwardRef(
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
          d="M2 1V0h11v1H8.329a4.494 4.494 0 011.644 3H13v1H9.973A4.5 4.5 0 015.5 9H3.852l5.973 5.12-.65.76-7-6A.5.5 0 012.5 8h3a3.5 3.5 0 003.465-3H2V4h6.965A3.5 3.5 0 005.5 1H2z"
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
