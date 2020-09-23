import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNote = forwardRef(
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
          d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5V9H9.5a.5.5 0 00-.5.5V15H1.5A1.5 1.5 0 010 13.5v-12zM12 4H3V3h9v1z"
          fill={color}
        />
        <path
          d="M10 15h.086a1.5 1.5 0 001.06-.44l3.415-3.414a1.5 1.5 0 00.439-1.06V10h-5v5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNote.displayName = "Note";

export default SvgNote;
