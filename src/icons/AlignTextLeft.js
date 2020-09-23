import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTextLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M0 3.5h15m-15 8h9m-9-4h6" stroke={color} />
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
