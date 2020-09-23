import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDollar = forwardRef(
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
          d="M7 1V0h1v1h1.5A3.5 3.5 0 0113 4.5h-1A2.5 2.5 0 009.5 2h-4a2.5 2.5 0 000 5h4a3.5 3.5 0 110 7H8v1H7v-1H5.5A3.5 3.5 0 012 10.5h1A2.5 2.5 0 005.5 13h4a2.5 2.5 0 000-5h-4a3.5 3.5 0 110-7H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDollar.displayName = "Dollar";

export default SvgDollar;
