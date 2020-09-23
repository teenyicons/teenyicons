import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDistributeHorizontal = forwardRef(
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
          d="M1 15V0H0v15h1zM15 15V0h-1v15h1zM10 1H5v13h5V1z"
          fill={color}
        />
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
