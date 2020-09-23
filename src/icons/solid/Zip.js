import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgZip = forwardRef(
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
          d="M3.296 11.379L3.89 9h1.22l.594 2.379A.5.5 0 015.22 12H3.781a.5.5 0 01-.485-.621zM10.5 3a.5.5 0 00-.5.5V4h1v-.5a.5.5 0 00-.5-.5z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-12zM3 3h3V2H3v1zm0 2h3V4H3v1zm3 2H3V6h3v1zm-.11 1H3.11l-.784 3.136A1.5 1.5 0 003.78 13h1.438a1.5 1.5 0 001.455-1.864L5.89 8zm3.374 2.06a.5.5 0 01.513.024L12 11.566V10h1v2.5a.5.5 0 01-.777.416L10 11.434V13H9v-2.5a.5.5 0 01.264-.44zM9 6v3h1V8h2v1h1V6h-1v1h-2V6H9zm3-2v-.5a1.5 1.5 0 00-3 0V5h4V4h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgZip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgZip.displayName = "Zip";

export default SvgZip;
