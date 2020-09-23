import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSpotify = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm-3.838 9.116c.986-.24 2.2-.345 3.392-.228 1.196.117 2.334.454 3.202 1.065l.575-.819c-1.053-.74-2.375-1.113-3.679-1.241a11.446 11.446 0 00-3.727.252l.237.971zm-.336-2.124c3.446-.61 5.848-.297 7.839 1.132l.583-.813C9.45 6.661 6.732 6.374 3.152 7.008l.174.984zm-.225-2.151c1.353-.478 3.003-.676 4.624-.544 1.623.133 3.18.595 4.364 1.4l.561-.828c-1.364-.927-3.099-1.426-4.843-1.568-1.746-.143-3.539.067-5.039.597l.333.943z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSpotify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSpotify.displayName = "Spotify";

export default SvgSpotify;
