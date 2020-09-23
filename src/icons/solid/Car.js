import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCar = forwardRef(
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
          d="M2.197 2.698A3.5 3.5 0 015.198 1h4.604a3.5 3.5 0 013 1.698L15 6.358V12.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5V12H4v.5A1.5 1.5 0 012.5 14h-1A1.5 1.5 0 010 12.5V6.358l2.197-3.66zM12 7H3V6h9v1zM2 10h3V9H2v1zm11-1h-3v1h3V9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCar.displayName = "Car";

export default SvgCar;
