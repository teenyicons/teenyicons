import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSearch = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSearch.displayName = "Search";

export default SvgSearch;
