import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGif = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM2 11V6h3v1H3v3h1V8.5h1V11H2zm6-4h1V6H6v1h1v3H6v1h3v-1H8V7zm5-1v1h-2v1h1v1h-1v2h-1V6h3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGif.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGif.displayName = "Gif";

export default SvgGif;
