import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDownload = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 10.5l-3.25-3m3.25 3l3-3m-3 3V1m6 6v6.5h-12V7"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDownload.displayName = "Download";

export default SvgDownload;
