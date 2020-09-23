import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTop = forwardRef(
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
        <path d="M15 0H0v1h15V0zM7 3H3v12h4V3zM12 3H8v8h4V3z" fill={color} />
      </svg>
    );
  }
);

SvgAlignTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignTop.displayName = "AlignTop";

export default SvgAlignTop;
