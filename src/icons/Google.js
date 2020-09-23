import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGoogle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 7.5h.5V7h-.5v.5zm-7 6.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 0A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zm0 1c1.819 0 3.463.746 4.643 1.951l.714-.7A7.479 7.479 0 007.5 0v1zM8 8h6.5V7H8v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGoogle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGoogle.displayName = "Google";

export default SvgGoogle;
