import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChrome = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 5a.5.5 0 000-1v1zM2.964 2.814a.5.5 0 10-.928.372l.928-.372zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0 4h6V4h-6v1zM4.964 7.814l-2-5-.928.372 2 5 .928-.372zM9.25 9.301l-3.65 4.9.802.598 3.65-4.9-.802-.598zM7.5 10A2.5 2.5 0 015 7.5H4A3.5 3.5 0 007.5 11v-1zM10 7.5A2.5 2.5 0 017.5 10v1A3.5 3.5 0 0011 7.5h-1zM7.5 5A2.5 2.5 0 0110 7.5h1A3.5 3.5 0 007.5 4v1zm0-1A3.5 3.5 0 004 7.5h1A2.5 2.5 0 017.5 5V4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgChrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgChrome.displayName = "Chrome";

export default SvgChrome;
