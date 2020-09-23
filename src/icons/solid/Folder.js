import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolder = forwardRef(
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
          d="M1.5 1A1.5 1.5 0 000 2.5v10A1.5 1.5 0 001.5 14h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 3H7.707l-2-2H1.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFolder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFolder.displayName = "Folder";

export default SvgFolder;
