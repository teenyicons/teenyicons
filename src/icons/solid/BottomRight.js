import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBottomRight = forwardRef(
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
          d="M1.854 1.146L13 12.293V8h1v6H8v-1h4.293L1.146 1.854l.708-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBottomRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBottomRight.displayName = "BottomRight";

export default SvgBottomRight;
