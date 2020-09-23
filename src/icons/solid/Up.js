import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUp = forwardRef(
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
        <path d="M7.5 3l7.5 8H0l7.5-8z" fill={color} />
      </svg>
    );
  }
);

SvgUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUp.displayName = "Up";

export default SvgUp;
