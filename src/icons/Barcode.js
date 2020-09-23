import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBarcode = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M.5 2v11m5-11v11m2-11v11m7-11v11m-4-11v11" stroke={color} />
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
