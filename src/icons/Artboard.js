import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArtboard = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 4.5V4a.5.5 0 00-.5.5h.5zm6 0h.5a.5.5 0 00-.5-.5v.5zm0 6v.5a.5.5 0 00.5-.5h-.5zm-6 0H4a.5.5 0 00.5.5v-.5zM4 0v2h1V0H4zm6 0v2h1V0h-1zM0 5h2V4H0v1zm0 6h2v-1H0v1zm13-6h2V4h-2v1zm0 6h2v-1h-2v1zm-9 2v2h1v-2H4zm6 0v2h1v-2h-1zM4.5 5h6V4h-6v1zm5.5-.5v6h1v-6h-1zm.5 5.5h-6v1h6v-1zm-5.5.5v-6H4v6h1z"
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
