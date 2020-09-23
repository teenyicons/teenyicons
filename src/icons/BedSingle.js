import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBedSingle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 4v11M.5 0v15M0 10.5h15m-15-3h15m-13-2h4"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBedSingle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBedSingle.displayName = "BedSingle";

export default SvgBedSingle;
