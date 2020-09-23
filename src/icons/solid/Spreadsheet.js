import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSpreadsheet = forwardRef(
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
          d="M10 7.995V10H8V7.995h2zM10 4.997v1.998H8V4.997h2zM7 4.997H5v1.998h2V4.997zM7 7.995H5V10h2V7.995z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zm10 2.497H4V11h7V3.997z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSpreadsheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSpreadsheet.displayName = "Spreadsheet";

export default SvgSpreadsheet;
