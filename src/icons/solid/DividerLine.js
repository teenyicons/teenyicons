import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDividerLine = forwardRef(
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
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2H3V1h9v1zm-2 3H3V4h7v1zm5 3H0V7h15v1zm-3 3H3v-1h9v1zm-2 3H3v-1h7v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDividerLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDividerLine.displayName = "DividerLine";

export default SvgDividerLine;
