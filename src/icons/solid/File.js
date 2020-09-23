import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFile = forwardRef(
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
          d="M2.5 0A1.5 1.5 0 001 1.5v12A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5V3.293L10.707 0H2.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFile.displayName = "File";

export default SvgFile;
