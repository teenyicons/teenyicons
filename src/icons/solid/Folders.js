import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolders = forwardRef(
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
          d="M4.5 0A1.5 1.5 0 003 1.5v7A1.5 1.5 0 004.5 10h9A1.5 1.5 0 0015 8.5v-5A1.5 1.5 0 0013.5 2H9.707l-2-2H4.5z"
          fill={color}
        />
        <path
          d="M12 11H4.5A2.5 2.5 0 012 8.5V5h-.5A1.5 1.5 0 000 6.5v7A1.5 1.5 0 001.5 15h9a1.5 1.5 0 001.5-1.5V11z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFolders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFolders.displayName = "Folders";

export default SvgFolders;
