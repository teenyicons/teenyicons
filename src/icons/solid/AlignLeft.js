import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignLeft = forwardRef(
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
        <path d="M0 0v15h1V0H0zM11 3H3v4h8V3zM15 8H3v4h12V8z" fill={color} />
      </svg>
    );
  }
);

SvgAlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignLeft.displayName = "AlignLeft";

export default SvgAlignLeft;
