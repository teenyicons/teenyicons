import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortDown = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 14.5l-.354.354a.5.5 0 00.708 0L3.5 14.5zm.354.354l3-3-.708-.708-3 3 .708.708zm0-.708l-3-3-.708.708 3 3 .708-.708zM3 0v14.5h1V0H3zm6 4h6V3H9v1zm0 4h4V7H9v1zm0 4h2v-1H9v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSortDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSortDown.displayName = "SortDown";

export default SvgSortDown;
