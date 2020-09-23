import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayers = forwardRef(
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
          d="M7.697 1.04a.5.5 0 00-.394 0l-7 3a.5.5 0 000 .92l7 3a.5.5 0 00.394 0l7-3a.5.5 0 000-.92l-7-3z"
          fill={color}
        />
        <path
          d="M7.5 9.956L.697 7.04l-.394.92L7.5 11.044l7.197-3.084-.394-.92L7.5 9.956z"
          fill={color}
        />
        <path
          d="M.697 10.04l-.394.92L7.5 14.044l7.197-3.084-.394-.92L7.5 12.956.697 10.04z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLayers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLayers.displayName = "Layers";

export default SvgLayers;
