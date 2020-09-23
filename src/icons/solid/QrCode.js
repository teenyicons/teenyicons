import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQrCode = forwardRef(
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
          d="M0 1.5A1.5 1.5 0 011.5 0h4A1.5 1.5 0 017 1.5v4A1.5 1.5 0 015.5 7h-4A1.5 1.5 0 010 5.5v-4zM1.5 1a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4zm6.5.5A1.5 1.5 0 019.5 0h4A1.5 1.5 0 0115 1.5v4A1.5 1.5 0 0113.5 7h-4A1.5 1.5 0 018 5.5v-4zM9.5 1a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4zM4 4H3V3h1v1zm8 0h-1V3h1v1zM0 9.5A1.5 1.5 0 011.5 8h4A1.5 1.5 0 017 9.5v4A1.5 1.5 0 015.5 15h-4A1.5 1.5 0 010 13.5v-4zM1.5 9a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4zM8 8h4v1H9v3H8V8zm7 1h-1V8h1v1zM4 12H3v-1h1v1zm10 0h-3v-1h4v4h-1v-3zm-6 2h4v1H8v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgQrCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgQrCode.displayName = "QrCode";

export default SvgQrCode;
