import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRight = forwardRef(
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
        <path d="M12 7.5L4 0v15l8-7.5z" fill={color} />
      </svg>
    );
  }
);

SvgRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRight.displayName = "Right";

export default SvgRight;
