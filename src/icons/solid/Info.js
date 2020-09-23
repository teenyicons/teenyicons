import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInfo = forwardRef(
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
          d="M8 .99V2H7V.99h1zM7 13H2v1h11v-1H8V4H4v1h3v8z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInfo.displayName = "Info";

export default SvgInfo;
