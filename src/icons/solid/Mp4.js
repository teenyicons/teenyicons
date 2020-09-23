import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMp4 = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM6 6h1.5a1.5 1.5 0 110 3H7v2H6V6zm-3.691.038a.5.5 0 01.545.108l.646.647.646-.647A.5.5 0 015 6.5V11H4V7.707l-.5.5-.5-.5V11H2V6.5a.5.5 0 01.309-.462zM11 6h-1v3h2v2h1V6h-1v2h-1V6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMp4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMp4.displayName = "Mp4";

export default SvgMp4;
