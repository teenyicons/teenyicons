import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgClipboard = forwardRef(
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
          d="M11 0H4v1H1v12.5A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5V1h-3V0zm-1 1H5v1.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgClipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgClipboard.displayName = "Clipboard";

export default SvgClipboard;
