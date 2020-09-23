import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUnlockSmall = forwardRef(
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
          d="M6 5.621a1.621 1.621 0 012.768-1.146l.378.379.708-.708-.38-.378A2.621 2.621 0 005 5.62v.464A1.5 1.5 0 004 7.5v3A1.5 1.5 0 005.5 12h4a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 6H6v-.379z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUnlockSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUnlockSmall.displayName = "UnlockSmall";

export default SvgUnlockSmall;
