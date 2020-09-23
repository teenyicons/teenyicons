import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTextRight = forwardRef(
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
          d="M0 3h15v1H0V3zm9 4h6v1H9V7zm-3 4h9v1H6v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAlignTextRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignTextRight.displayName = "AlignTextRight";

export default SvgAlignTextRight;
