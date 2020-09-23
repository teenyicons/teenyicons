import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRightSmall = forwardRef(
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
        <path d="M10.207 7.5L6 3.293v8.414L10.207 7.5z" fill={color} />
      </svg>
    );
  }
);

SvgRightSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRightSmall.displayName = "RightSmall";

export default SvgRightSmall;
