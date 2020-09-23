import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTextLeft = forwardRef(
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
          d="M15 4H0V3h15v1zM6 8H0V7h6v1zm3 4H0v-1h9v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAlignTextLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignTextLeft.displayName = "AlignTextLeft";

export default SvgAlignTextLeft;
