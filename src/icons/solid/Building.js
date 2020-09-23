import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBuilding = forwardRef(
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
          d="M7.724.053a.5.5 0 00-.448 0l-6 3 .448.894L7.5 1.06l5.776 2.888.448-.894-6-3zM14 6h1V5H0v1h1v8H0v1h4V8h5v7h6v-1h-1V6z"
          fill={color}
        />
        <path d="M8 15V9H5v6h3z" fill={color} />
      </svg>
    );
  }
);

SvgBuilding.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBuilding.displayName = "Building";

export default SvgBuilding;
