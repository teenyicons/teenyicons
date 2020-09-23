import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAudioDocument = forwardRef(
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
        <path d="M7 10a1 1 0 10-2 0 1 1 0 002 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zm6.342 2.526A.5.5 0 017.9 4.2l.3.4A3.5 3.5 0 0011 6v1a4.5 4.5 0 01-3-1.146V10a2 2 0 11-1-1.732V4.5a.5.5 0 01.342-.474z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAudioDocument.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAudioDocument.displayName = "AudioDocument";

export default SvgAudioDocument;
