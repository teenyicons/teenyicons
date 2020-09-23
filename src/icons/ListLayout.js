import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgListLayout = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7 3.5h8m-8 8h8M1.5 1.5h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1zm0 8h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgListLayout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgListLayout.displayName = "ListLayout";

export default SvgListLayout;
