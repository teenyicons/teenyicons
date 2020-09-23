import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGba = forwardRef(
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
          d="M3.719 2.42A2.5 2.5 0 015.106 2h4.789a2.5 2.5 0 011.386.42l.87.58a2.5 2.5 0 012.48 2.322l.32 4.476a1.5 1.5 0 01-.825 1.448l-2.09 1.045a3.68 3.68 0 01-.753.279c-2.484.62-5.082.62-7.566 0a3.68 3.68 0 01-.753-.279l-2.09-1.045A1.5 1.5 0 01.05 9.798l.32-4.476A2.5 2.5 0 012.849 3l.87-.58zM3 8V7H2V6h1V5h1v1h1v1H4v1H3zm10-1h-1V6h1v1zm-2 2h1V8h-1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGba.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGba.displayName = "Gba";

export default SvgGba;
