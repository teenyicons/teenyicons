import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgServers = forwardRef(
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
          d="M0 2.5A1.5 1.5 0 011.5 1h12A1.5 1.5 0 0115 2.5v2c0 .384-.144.735-.382 1 .238.265.382.616.382 1v2c0 .384-.144.735-.382 1 .238.265.382.616.382 1v2a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 12.5v-2c0-.384.144-.735.382-1A1.494 1.494 0 010 8.5v-2c0-.384.144-.735.382-1A1.494 1.494 0 010 4.5v-2zM2 4h3V3H2v1zm3 4H2V7h3v1zm-3 4h3v-1H2v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgServers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgServers.displayName = "Servers";

export default SvgServers;
