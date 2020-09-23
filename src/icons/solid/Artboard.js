import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArtboard = forwardRef(
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
          d="M4 0v2h1V0H4zM10 0v2h1V0h-1zM2 5H0V4h2v1zM0 11h2v-1H0v1zM15 5h-2V4h2v1zM13 11h2v-1h-2v1zM4 15v-2h1v2H4zM10 13v2h1v-2h-1zM4.5 4a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArtboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArtboard.displayName = "Artboard";

export default SvgArtboard;
