import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGbc = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 2.5V2a.5.5 0 00-.5.5h.5zm6 0h.5a.5.5 0 00-.5-.5v.5zm-6 4H4a.5.5 0 00.5.5v-.5zM3.5 1h8V0h-8v1zm8.5.5v10h1v-10h-1zM9.5 14h-6v1h6v-1zM3 13.5v-12H2v12h1zm.5.5a.5.5 0 01-.5-.5H2A1.5 1.5 0 003.5 15v-1zm8.5-2.5A2.5 2.5 0 019.5 14v1a3.5 3.5 0 003.5-3.5h-1zM11.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 0011.5 0v1zm-8-1A1.5 1.5 0 002 1.5h1a.5.5 0 01.5-.5V0zm1 3h6V2h-6v1zm5.5-.5v3h1v-3h-1zM9.5 6h-5v1h5V6zM5 6.5v-4H4v4h1zm5-1a.5.5 0 01-.5.5v1A1.5 1.5 0 0011 5.5h-1zM5 8v3h1V8H5zm-1 2h3V9H4v1zm6-1h1V8h-1v1zm-1 2h1v-1H9v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGbc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGbc.displayName = "Gbc";

export default SvgGbc;
