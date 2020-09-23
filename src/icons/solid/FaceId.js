import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFaceId = forwardRef(
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
          d="M2.5 1A1.5 1.5 0 001 2.5V5H0V2.5A2.5 2.5 0 012.5 0H5v1H2.5zm10 0H10V0h2.5A2.5 2.5 0 0115 2.5V5h-1V2.5A1.5 1.5 0 0012.5 1zM5 6H4V5h1v1zm6 0h-1V5h1v1zM4.9 8.7a3.25 3.25 0 005.2 0l.8.6c-1.7 2.267-5.1 2.267-6.8 0l.8-.6zM0 12.5V10h1v2.5A1.5 1.5 0 002.5 14H5v1H2.5A2.5 2.5 0 010 12.5zM15 10v2.5a2.5 2.5 0 01-2.5 2.5H10v-1h2.5a1.5 1.5 0 001.5-1.5V10h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFaceId.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFaceId.displayName = "FaceId";

export default SvgFaceId;
