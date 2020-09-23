import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFileNoAccess = forwardRef(
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
          d="M7.5 5a2.5 2.5 0 00-2.086 3.879L8.88 5.414A2.488 2.488 0 007.5 5zM7.5 10c-.51 0-.983-.152-1.379-.414L9.586 6.12A2.5 2.5 0 017.5 10z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zm3 6a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFileNoAccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFileNoAccess.displayName = "FileNoAccess";

export default SvgFileNoAccess;
