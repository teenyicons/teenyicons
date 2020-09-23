import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSearch = forwardRef(
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
          d="M6.5 0a6.5 6.5 0 104.23 11.436l3.416 3.418.708-.708-3.418-3.417A6.5 6.5 0 006.5 0z"
          fill={color}
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
