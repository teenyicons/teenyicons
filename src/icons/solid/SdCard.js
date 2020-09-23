import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSdCard = forwardRef(
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
          d="M5.293 0H12.5A1.5 1.5 0 0114 1.5v12a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5V4.293L5.293 0zM6 3v3h1V3H6zm2 0v3h1V3H8zm2 3V3h1v3h-1z"
          fill={color}
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
