import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPound = forwardRef(
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
          d="M3 4.442A4.442 4.442 0 017.442 0h.865a4.477 4.477 0 014.157 2.814l-.928.372A3.477 3.477 0 008.307 1h-.865C5.54 1 4 2.54 4 4.442V7h5v1H4v3.5c0 .346-.054.683-.156 1h.24a6.5 6.5 0 012.906.686l.05.025-.223.447.223-.447a5.5 5.5 0 004.92 0l1.316-.658.448.894-1.317.659a6.5 6.5 0 01-5.814 0l-.05-.025.224-.448-.224.448a5.5 5.5 0 00-2.46-.581h-.765a3.27 3.27 0 01-1.557 1.107l-1.103.367-.316-.948 1.103-.368A2.275 2.275 0 003 11.5V8H1V7h2V4.442z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPound.displayName = "Pound";

export default SvgPound;
