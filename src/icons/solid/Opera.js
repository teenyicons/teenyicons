import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgOpera = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 0113.146-4.936A17.5 17.5 0 008.741 2H7.5A3.5 3.5 0 004 5.5v4A3.5 3.5 0 007.5 13h1.241c1.488 0 2.969-.19 4.405-.563A7.5 7.5 0 010 7.5z"
          fill={color}
        />
        <path
          d="M14.073 11.115A7.466 7.466 0 0015 7.5c0-1.31-.336-2.543-.927-3.615l-.114-.038a16.5 16.5 0 00-3.962-.8A3.489 3.489 0 0111 5.5v4c0 .955-.383 1.82-1.003 2.452a16.499 16.499 0 003.962-.799l.114-.038z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgOpera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgOpera.displayName = "Opera";

export default SvgOpera;
