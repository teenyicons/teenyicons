import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDistributeVertical = forwardRef(
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
          d="M15 0H0v1h15V0zM14 5H1v5h13V5zM15 14H0v1h15v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDistributeVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDistributeVertical.displayName = "DistributeVertical";

export default SvgDistributeVertical;
