import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTable = forwardRef(
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
          d="M0 1.5A1.5 1.5 0 011.5 0H4v4H0V1.5zM0 5v8.5A1.5 1.5 0 001.5 15H4V5H0zM5 15h8.5a1.5 1.5 0 001.5-1.5V5H5v10zM15 4V1.5A1.5 1.5 0 0013.5 0H5v4h10z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTable.displayName = "Table";

export default SvgTable;
