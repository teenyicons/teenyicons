import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortDown = forwardRef(
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
          d="M3 13.293V0h1v13.293l2.146-2.147.708.708-3 3a.5.5 0 01-.708 0l-3-3 .708-.708L3 13.293zM15 4H9V3h6v1zm-2 4H9V7h4v1zm-2 4H9v-1h2v1z"
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
