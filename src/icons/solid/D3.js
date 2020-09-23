import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgD3 = forwardRef(
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
          d="M1.5 2H0V1h1.5a6.5 6.5 0 010 13H0v-1h1.5a5.5 5.5 0 100-11zm10 0H7V1h4.5a3.5 3.5 0 011.804 6.5A3.5 3.5 0 0111.5 14H7v-1h4.5a2.5 2.5 0 000-5H9V7h2.5a2.5 2.5 0 000-5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgD3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgD3.displayName = "D3";

export default SvgD3;
