import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAttach = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 7.5l-5.757 5.757a4.243 4.243 0 01-6-6l5.929-5.929a2.828 2.828 0 014 4l-5.758 5.758a1.414 1.414 0 01-2-2L9.5 3.5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAttach.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAttach.displayName = "Attach";

export default SvgAttach;
