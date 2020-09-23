import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlant = forwardRef(
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
          d="M7 4.5A4.5 4.5 0 0111.5 0H15v3.5A4.5 4.5 0 0110.5 8H8v7H7v-4H4.5A4.5 4.5 0 010 6.5V3h3.5c1.414 0 2.675.652 3.5 1.671V4.5zm1.146 1.646l3-3 .708.708-3 3-.708-.708zm-2 3.708l-3-3 .708-.708 3 3-.708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPlant.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlant.displayName = "Plant";

export default SvgPlant;
