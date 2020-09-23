import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDownSmall = forwardRef(
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
        <path d="M7.5 10.207L11.707 6H3.293L7.5 10.207z" fill={color} />
      </svg>
    );
  }
);

SvgDownSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDownSmall.displayName = "DownSmall";

export default SvgDownSmall;
