import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEditSmall = forwardRef(
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
          d="M8.854 4.146a.5.5 0 00-.708 0L4 8.293V10.5a.5.5 0 00.5.5h2.207l4.147-4.146a.5.5 0 000-.708l-2-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEditSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEditSmall.displayName = "EditSmall";

export default SvgEditSmall;
