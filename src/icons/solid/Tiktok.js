import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTiktok = forwardRef(
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
          d="M9 0h1v1a4 4 0 004 4v1a4.992 4.992 0 01-4-2v7a4 4 0 11-4-4v1a3 3 0 103 3V0z"
          fill={color}
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
