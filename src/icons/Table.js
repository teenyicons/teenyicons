import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTable = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 4.5h14m-10-4v14m-3-14h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
          stroke={color}
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
