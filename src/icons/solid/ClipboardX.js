import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgClipboardX = forwardRef(
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
          d="M4 0h7v1h3v12.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5V1h3V0zm1 1h5v1.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V1zm4.146 9.854L7.5 9.207l-1.646 1.646-.708-.707L6.793 8.5 5.146 6.854l.708-.708L7.5 7.793l1.646-1.647.708.708L8.207 8.5l1.647 1.646-.708.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgClipboardX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgClipboardX.displayName = "ClipboardX";

export default SvgClipboardX;
