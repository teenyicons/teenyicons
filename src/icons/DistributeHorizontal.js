import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDistributeHorizontal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M.5 15V0m14 15V0m-9 13.5v-12h4v12h-4z" stroke={color} />
      </svg>
    );
  }
);

SvgDistributeHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDistributeHorizontal.displayName = "DistributeHorizontal";

export default SvgDistributeHorizontal;
