import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUpload = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 1.5l3.25 3m-3.25-3l-3 3m3-3V11m6-4v6.5h-12V7"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUpload.displayName = "Upload";

export default SvgUpload;
