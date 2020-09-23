import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGhost = forwardRef(
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
          d="M1 6.5a6.5 6.5 0 0113 0v6.586a1.914 1.914 0 01-3.268 1.353l-.086-.085A1.207 1.207 0 009.793 14h-.086c-.32 0-.627.127-.853.354l-.147.146a1.707 1.707 0 01-2.414 0l-.147-.146A1.207 1.207 0 005.293 14h-.086c-.32 0-.627.127-.853.354l-.086.085A1.914 1.914 0 011 13.086V6.5zM5 6h1V5H5v1zm4 0h1V5H9v1zM4.9 7.7a3.25 3.25 0 005.2 0l.8.6c-1.7 2.267-5.1 2.267-6.8 0l.8-.6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGhost.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGhost.displayName = "Ghost";

export default SvgGhost;
