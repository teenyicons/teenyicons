import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgListLayout = forwardRef(
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
          d="M1.5 1A1.5 1.5 0 000 2.5v2A1.5 1.5 0 001.5 6h2A1.5 1.5 0 005 4.5v-2A1.5 1.5 0 003.5 1h-2zM7 4h8V3H7v1zM1.5 9A1.5 1.5 0 000 10.5v2A1.5 1.5 0 001.5 14h2A1.5 1.5 0 005 12.5v-2A1.5 1.5 0 003.5 9h-2zM7 12h8v-1H7v1z"
          fill={color}
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
