import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgClipboardTick = forwardRef(
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
          d="M4 0h7v1h3v12.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5V1h3V0zm1 1h5v1.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V1zm2.024 10.232l3.852-4.403-.752-.658-3.148 3.598-1.622-1.623-.708.708 2.378 2.378z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgClipboardTick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgClipboardTick.displayName = "ClipboardTick";

export default SvgClipboardTick;
