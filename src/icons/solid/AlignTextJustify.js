import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTextJustify = forwardRef(
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
          d="M15 4H0V3h15v1zm0 4H0V7h15v1zm0 4H0v-1h15v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAlignTextJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignTextJustify.displayName = "AlignTextJustify";

export default SvgAlignTextJustify;
