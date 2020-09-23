import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoc = forwardRef(
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
          d="M3 10V7h.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H3zM7 7.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-2z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM3.5 6H2v5h1.5A1.5 1.5 0 005 9.5v-2A1.5 1.5 0 003.5 6zm4 0A1.5 1.5 0 006 7.5v2a1.5 1.5 0 003 0v-2A1.5 1.5 0 007.5 6zm2.5 5V6h3v2h-1V7h-1v3h1V9h1v2h-3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoc.displayName = "Doc";

export default SvgDoc;
