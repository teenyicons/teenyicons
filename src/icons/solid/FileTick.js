import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFileTick = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zm6.024 8.732l3.852-4.403-.752-.658-3.148 3.598-1.622-1.623-.708.708 2.378 2.378z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFileTick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFileTick.displayName = "FileTick";

export default SvgFileTick;
