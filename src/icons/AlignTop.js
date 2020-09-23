import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTop = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M15 .5H0m11.5 3h-3v7h3v-7zm-5 0h-3v11h3v-11z" stroke={color} />
      </svg>
    );
  }
);

SvgAlignTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignTop.displayName = "AlignTop";

export default SvgAlignTop;
