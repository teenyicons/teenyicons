import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPaw = forwardRef(
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
          d="M5 0a2 2 0 00-2 2v1a2 2 0 104 0V2a2 2 0 00-2-2zM10 0a2 2 0 00-2 2v1a2 2 0 104 0V2a2 2 0 00-2-2zM2 5a2 2 0 00-2 2v.5a2 2 0 104 0V7a2 2 0 00-2-2zM13 5a2 2 0 00-2 2v.5a2 2 0 104 0V7a2 2 0 00-2-2zM9.613 7.779a2.737 2.737 0 00-4.226 0L2.47 11.322C1.261 12.789 2.305 15 4.205 15c.272 0 .54-.063.782-.185l.36-.18a4.814 4.814 0 014.306 0l.36.18c.242.122.51.185.782.185 1.9 0 2.944-2.211 1.736-3.678L9.613 7.779z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPaw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPaw.displayName = "Paw";

export default SvgPaw;
