import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgText = forwardRef(
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
          d="M1 1h13v4h-1V2H8v11h3v1H3.5v-1H7V2H2v3H1V1z"
          fill={color}
        />
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
