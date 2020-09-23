import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFileX = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zm8.146 8.354L7.5 8.207 5.854 9.854l-.708-.708L6.793 7.5 5.146 5.854l.708-.708L7.5 6.793l1.646-1.647.708.708L8.207 7.5l1.647 1.646-.708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFileX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFileX.displayName = "FileX";

export default SvgFileX;
