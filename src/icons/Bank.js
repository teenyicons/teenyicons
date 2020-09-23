import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBank = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l.224-.447a.5.5 0 00-.448 0L7.5.5zM0 15h15v-1H0v1zM7.276.053l-6 3 .448.894 6-3-.448-.894zM0 6h15V5H0v1zm13.724-2.947l-6-3-.448.894 6 3 .448-.894zM5 8v4h1V8H5zm4 0v4h1V8H9zM1 5.5v9h1v-9H1zm12 0v9h1v-9h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBank.displayName = "Bank";

export default SvgBank;
