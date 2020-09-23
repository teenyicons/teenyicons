import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAnja = forwardRef(
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
        <path d="M8 13a2 2 0 002-2H9a1 1 0 01-1 1H6.5v1H8z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 15c-.183 0-.364-.01-.543-.029L7 15H1V6h.019A6.5 6.5 0 0114 6.5V15H7.5zM8.974 4.9l1.3.086A5.951 5.951 0 0111.503 7H4.207a5.616 5.616 0 014.767-2.1zM9.085 8h2.71l.04.196c.051.264.073.533.07.804H10.5a1.5 1.5 0 01-1.415-1zm1.415 2h1.286a8.016 8.016 0 01-.524 1.556 4.116 4.116 0 01-7.524 0A6.23 6.23 0 013.254 10H4.5a2.5 2.5 0 002.45-2h1.1a2.5 2.5 0 002.45 2zm-6-1H3.235c.032-.23.09-.453.18-.669.048-.112.099-.223.153-.331h2.347A1.5 1.5 0 014.5 9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAnja.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAnja.displayName = "Anja";

export default SvgAnja;
