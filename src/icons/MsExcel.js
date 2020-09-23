import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMsExcel = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 3.5v-2a1 1 0 011-1h10a1 1 0 011 1v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-2m0-6l4 4m-4 0l4-4m-5-2h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMsExcel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMsExcel.displayName = "MsExcel";

export default SvgMsExcel;
