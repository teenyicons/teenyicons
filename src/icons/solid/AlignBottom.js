import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignBottom = forwardRef(
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
        <path d="M7 0H3v12h4V0zM12 4H8v8h4V4zM15 14H0v1h15v-1z" fill={color} />
      </svg>
    );
  }
);

SvgAlignBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignBottom.displayName = "AlignBottom";

export default SvgAlignBottom;
