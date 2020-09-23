import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortAlphabetically = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 14.5l-.354.354a.5.5 0 00.708 0L3.5 14.5zm6-6V8H9v.5h.5zm0 6H9v.5h.5v-.5zm-5.646.354l3-3-.708-.708-3 3 .708.708zm0-.708l-3-3-.708.708 3 3 .708-.708zM3 0v14.5h1V0H3zm6.5 9H12V8H9.5v1zm2.5 2H9.5v1H12v-1zm-2 .5v-3H9v3h1zm3-1.5a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm0 5H9.5v1H12v-1zm-2 .5v-3H9v3h1zm3-1.5a1 1 0 01-1 1v1a2 2 0 002-2h-1zm-1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zm-2-5V2.5H9V7h1zm3-4.5V7h1V2.5h-1zM11.5 1A1.5 1.5 0 0113 2.5h1A2.5 2.5 0 0011.5 0v1zM10 2.5A1.5 1.5 0 0111.5 1V0A2.5 2.5 0 009 2.5h1zM9.5 5h4V4h-4v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSortAlphabetically.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSortAlphabetically.displayName = "SortAlphabetically";

export default SvgSortAlphabetically;
