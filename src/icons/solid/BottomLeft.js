import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBottomLeft = forwardRef(
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
          d="M13.854 1.854L2.707 13H7v1H1V8h1v4.293L13.146 1.146l.708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBottomLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBottomLeft.displayName = "BottomLeft";

export default SvgBottomLeft;
