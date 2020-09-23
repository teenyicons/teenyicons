import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFingerprint = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M12.587 3.513a6.03 6.03 0 01.818 3.745v.75c0 .788.205 1.563.595 2.247M4.483 6.508c0-.795.313-1.557.871-2.119a2.963 2.963 0 012.103-.877c.789 0 1.545.315 2.103.877.558.562.871 1.324.871 2.12v.748c0 1.621.522 3.198 1.487 4.495m-4.46-5.244v1.498A10.542 10.542 0 009.315 14M4.483 9.505A13.559 13.559 0 005.821 14m-3.643-1.498c-.501-1.7-.727-3.471-.669-5.244V6.51a6.028 6.028 0 01.79-3.002 5.97 5.97 0 012.177-2.2 5.914 5.914 0 015.955-.004"
          stroke={color}
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgFingerprint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFingerprint.displayName = "Fingerprint";

export default SvgFingerprint;
