import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCertificate = forwardRef(
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
          d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5V5.5l-.8-.601a4.5 4.5 0 00-6.3 6.3l.1.134V15H1.5A1.5 1.5 0 010 13.5v-12zM8 5H3V4h5v1zM3 8h3V7H3v1z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 5A3.5 3.5 0 009 10.95v3.55a.5.5 0 00.8.4l1.7-1.275 1.7 1.275a.5.5 0 00.8-.4v-3.55A3.5 3.5 0 0011.5 5zM10 13.5v-1.837c.455.216.963.337 1.5.337s1.045-.12 1.5-.337V13.5l-1.2-.9a.5.5 0 00-.6 0l-1.2.9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCertificate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCertificate.displayName = "Certificate";

export default SvgCertificate;
