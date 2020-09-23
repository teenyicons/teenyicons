import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignRight = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 0v15m-3-11.5v3h-7v-3h7zm0 5v3H.5v-3h11z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignRight.displayName = "AlignRight";

export default SvgAlignRight;
