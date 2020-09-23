import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTv = forwardRef(
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
          d="M1.5 1A1.5 1.5 0 000 2.5v8A1.5 1.5 0 001.5 12H2v1H1v1h3v-1H3v-1h9v1h-1v1h3v-1h-1v-1h.5a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 1h-12z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTv.displayName = "Tv";

export default SvgTv;
