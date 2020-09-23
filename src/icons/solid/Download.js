import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDownload = forwardRef(
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
          d="M7 9.358V1h1v8.293l2.146-2.147.708.708-3.34 3.34L3.91 7.866l.678-.734L7 9.358zM2 13V7H1v7h13V7h-1v6H2z"
          fill={color}
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
