import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMicroSdCard = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 3v3m2-3v3m2-3v3m-8 8.5h10a1 1 0 001-1v-12a1 1 0 00-1-1h-8a1 1 0 00-1 1v5l-2 2v5a1 1 0 001 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMicroSdCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMicroSdCard.displayName = "MicroSdCard";

export default SvgMicroSdCard;
