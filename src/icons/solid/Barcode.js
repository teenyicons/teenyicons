import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBarcode = forwardRef(
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
          d="M0 13V2h1v11H0zm5 0V2h1v11H5zm2 0V2h1v11H7zm3 0V2h1v11h-1zm4 0V2h1v11h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBarcode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBarcode.displayName = "Barcode";

export default SvgBarcode;
