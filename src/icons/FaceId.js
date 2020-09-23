import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFaceId = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 6h1V5H4v1zm6 0h1V5h-1v1zm.1 2.7a3.25 3.25 0 01-5.2 0l-.8.6c1.7 2.267 5.1 2.267 6.8 0l-.8-.6zM1 5V2.5H0V5h1zm1.5-4H5V0H2.5v1zM1 2.5A1.5 1.5 0 012.5 1V0A2.5 2.5 0 000 2.5h1zM0 10v2.5h1V10H0zm2.5 5H5v-1H2.5v1zM0 12.5A2.5 2.5 0 002.5 15v-1A1.5 1.5 0 011 12.5H0zM10 1h2.5V0H10v1zm4 1.5V5h1V2.5h-1zM12.5 1A1.5 1.5 0 0114 2.5h1A2.5 2.5 0 0012.5 0v1zM10 15h2.5v-1H10v1zm5-2.5V10h-1v2.5h1zM12.5 15a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1z"
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
