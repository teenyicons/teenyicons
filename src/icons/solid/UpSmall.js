import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUpSmall = forwardRef(
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
        <path d="M7.5 4.793L3.293 9h8.414L7.5 4.793z" fill={color} />
      </svg>
    );
  }
);

SvgUpSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUpSmall.displayName = "UpSmall";

export default SvgUpSmall;
