import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCartMinus = forwardRef(
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
          d="M.021.644L.979.356 1.472 2H12.5A2.5 2.5 0 0115 4.5V11H3.128L.02.644zM6 7h5V6H6v1zM4 13.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-.5a.5.5 0 100 1 .5.5 0 000-1zM11 13.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-.5a.5.5 0 100 1 .5.5 0 000-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCartMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCartMinus.displayName = "CartMinus";

export default SvgCartMinus;
