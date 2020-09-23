import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTiktok = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.5 0v11A3.5 3.5 0 116 7.5m8-2A4.5 4.5 0 019.5 1"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgTiktok.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTiktok.displayName = "Tiktok";

export default SvgTiktok;
