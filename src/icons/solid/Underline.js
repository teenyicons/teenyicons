import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUnderline = forwardRef(
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
          d="M3 7.5V1h1v6.5a3.5 3.5 0 107 0V1h1v6.5a4.5 4.5 0 01-9 0zM13 13v1H2v-1h11z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUnderline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUnderline.displayName = "Underline";

export default SvgUnderline;
