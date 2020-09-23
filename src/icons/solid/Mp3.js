import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMp3 = forwardRef(
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
        <path d="M7.5 8H7V7h.5a.5.5 0 010 1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM7.5 6H6v5h1V9h.5a1.5 1.5 0 100-3zm-4.646.146A.5.5 0 002 6.5V11h1V7.707l.5.5.5-.5V11h1V6.5a.5.5 0 00-.854-.354l-.646.647-.646-.647zM11.5 7H10V6h2.5a.5.5 0 01.4.8l-.951 1.268A1.5 1.5 0 0111.5 11H10v-1h1.5a.5.5 0 000-1H11a.5.5 0 01-.4-.8l.9-1.2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMp3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMp3.displayName = "Mp3";

export default SvgMp3;
