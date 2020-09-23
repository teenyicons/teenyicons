import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignRight = forwardRef(
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
        <path d="M14 0v15h1V0h-1zM12 3H4v4h8V3zM12 8H0v4h12V8z" fill={color} />
      </svg>
    );
  }
);

SvgAlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignRight.displayName = "AlignRight";

export default SvgAlignRight;
