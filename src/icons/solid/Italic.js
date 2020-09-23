import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgItalic = forwardRef(
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
          d="M7.91 2H4V1h9v1H8.924L7.09 13H11v1H2v-1h4.076L7.91 2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgItalic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgItalic.displayName = "Italic";

export default SvgItalic;
