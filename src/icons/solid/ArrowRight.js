import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowRight = forwardRef(
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
          d="M9.854 3.146L14.207 7.5l-4.353 4.354-.708-.708L12.293 8H1V7h11.293L9.146 3.854l.708-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowRight.displayName = "ArrowRight";

export default SvgArrowRight;
