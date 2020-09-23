import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTextCenter = forwardRef(
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
          d="M0 3h15v1H0V3zm5 4h5v1H5V7zm-2 4h9v1H3v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAlignTextCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignTextCenter.displayName = "AlignTextCenter";

export default SvgAlignTextCenter;
