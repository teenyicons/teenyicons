import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBuilding = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l.224-.447a.5.5 0 00-.448 0L7.5.5zm-3 8V8H4v.5h.5zm4 0H9V8h-.5v.5zM0 15h15v-1H0v1zM7.276.053l-6 3 .448.894 6-3-.448-.894zM0 6h15V5H0v1zm13.724-2.947l-6-3-.448.894 6 3 .448-.894zM1 5.5v9h1v-9H1zm12 0v9h1v-9h-1zm-8 9v-6H4v6h1zM4.5 9h4V8h-4v1zM8 8.5v6h1v-6H8z"
          fill={color}
        />
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
