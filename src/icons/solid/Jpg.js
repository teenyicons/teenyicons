import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgJpg = forwardRef(
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
        <path d="M7 8h.5a.5.5 0 000-1H7v1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM4 7H2V6h3v5H2V9h1v1h1V7zm2-1h1.5a1.5 1.5 0 110 3H7v2H6V6zm4 0h3v1h-2v3h1V8.5h1V11h-3V6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgJpg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgJpg.displayName = "Jpg";

export default SvgJpg;
