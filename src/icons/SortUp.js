import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortUp = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5.5l.354-.354a.5.5 0 00-.708 0L3.5.5zM3.146.146l-3 3 .708.708 3-3-.708-.708zm0 .708l3 3 .708-.708-3-3-.708.708zM3 .5V15h1V.5H3zM9 4h6V3H9v1zm0 4h4V7H9v1zm0 4h2v-1H9v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSortUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSortUp.displayName = "SortUp";

export default SvgSortUp;
