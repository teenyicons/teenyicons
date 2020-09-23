import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgN64 = forwardRef(
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
          d="M5.293 1h4.414l1 1h.793A3.5 3.5 0 0115 5.5v4.838a1.662 1.662 0 01-3.24.525L11.14 9h-.735a.5.5 0 00-.498.45l-.26 2.607a2.157 2.157 0 01-4.294 0l-.26-2.607A.5.5 0 004.595 9H3.86l-.62 1.863A1.662 1.662 0 010 10.338V5.5A3.5 3.5 0 013.5 2h.793l1-1zM4 7V6H3V5h1V4h1v1h1v1H5v1H4zm5-1h1V5H9v1zm3 0v1h-1V6h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgN64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgN64.displayName = "N64";

export default SvgN64;
