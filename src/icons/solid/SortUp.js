import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortUp = forwardRef(
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
          d="M3.146.146a.5.5 0 01.708 0l3 3-.708.708L4 1.707V15H3V1.707L.854 3.854l-.708-.708 3-3zM15 4H9V3h6v1zm-2 4H9V7h4v1zm-2 4H9v-1h2v1z"
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
