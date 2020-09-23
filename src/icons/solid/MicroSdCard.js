import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMicroSdCard = forwardRef(
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
          d="M3 1.5A1.5 1.5 0 014.5 0h8A1.5 1.5 0 0114 1.5v12a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5V8.293l2-2V1.5zM6 3v3h1V3H6zm2 0v3h1V3H8zm2 3V3h1v3h-1z"
          fill={color}
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
