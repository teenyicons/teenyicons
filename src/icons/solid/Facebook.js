import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFacebook = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 118 7.484V9h2V8H8V6.5A1.5 1.5 0 019.5 5h.5V4h-.5A2.5 2.5 0 007 6.5V8H5v1h2v5.984A7.5 7.5 0 010 7.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFacebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFacebook.displayName = "Facebook";

export default SvgFacebook;
