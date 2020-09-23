import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M.5 0v15m3-11.5v3h7v-3h-7zm0 5v3h11v-3h-11z" stroke={color} />
      </svg>
    );
  }
);

SvgAlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignLeft.displayName = "AlignLeft";

export default SvgAlignLeft;
