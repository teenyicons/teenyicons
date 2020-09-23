import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGameControllerRetro = forwardRef(
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
          d="M13.5 2A1.5 1.5 0 0115 3.5v8a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 11.5v-8A1.5 1.5 0 011.5 2h12zM10 6H8V5h2v1zM4 7V6h1v1h1v1H5v1H4V8H3V7h1zm8 3h-2V9h2v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGameControllerRetro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGameControllerRetro.displayName = "GameControllerRetro";

export default SvgGameControllerRetro;
