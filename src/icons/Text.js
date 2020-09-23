import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgText = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M7.5 14V1.5M1.5 5V1.5h12V5m-10 8.5H11" stroke={color} />
      </svg>
    );
  }
);

SvgText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgText.displayName = "Text";

export default SvgText;
