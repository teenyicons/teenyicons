import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSdCard = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 3v3m2-3v3m2-3v3m-8 8.5h10a1 1 0 001-1v-12a1 1 0 00-1-1h-7l-4 4v9a1 1 0 001 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSdCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSdCard.displayName = "SdCard";

export default SvgSdCard;
