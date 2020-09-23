import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgButton = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.5 10V8.5m0 0v-5a1 1 0 012 0v4h3.353c.91 0 1.647.737 1.647 1.647V10A4.5 4.5 0 018 14.5h-.5a4 4 0 01-4-4 2 2 0 012-2zm3.5-3h2a2.5 2.5 0 000-5H4a2.5 2.5 0 000 5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgButton.displayName = "Button";

export default SvgButton;
