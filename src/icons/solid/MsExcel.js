import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMsExcel = forwardRef(
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
          d="M3.793 7.5L2.146 5.854l.708-.708L4.5 6.793l1.646-1.647.708.708L5.207 7.5l1.647 1.646-.708.708L4.5 8.207 2.854 9.854l-.708-.708L3.793 7.5z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 0A1.5 1.5 0 002 1.5V3h-.5A1.5 1.5 0 000 4.5v6A1.5 1.5 0 001.5 12H2v1.5A1.5 1.5 0 003.5 15h10a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0013.5 0h-10zm-2 4a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6z"
          fill={color}
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
