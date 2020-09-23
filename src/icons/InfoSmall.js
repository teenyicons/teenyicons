import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInfoSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7 4.5V5h1v-.5H7zm1-.01v-.5H7v.5h1zM8 11V7H7v4h1zm0-6.5v-.01H7v.01h1zM6 8h1.5V7H6v1zm0 3h3v-1H6v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInfoSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInfoSmall.displayName = "InfoSmall";

export default SvgInfoSmall;
