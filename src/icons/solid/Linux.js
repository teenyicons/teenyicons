import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLinux = forwardRef(
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
        <path d="M5 8V7h1v1H5zM9 8V7h1v1H9z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 6.5a6.5 6.5 0 0113 0v6.514c0 .179.07.35.197.476l.657.656A.5.5 0 0114.5 15H.5a.5.5 0 01-.354-.854l.657-.656A.673.673 0 001 13.014V6.5zm3 0a1.5 1.5 0 113 0v1a1.5 1.5 0 11-3 0v-1zm4 0a1.5 1.5 0 113 0v1a1.5 1.5 0 01-3 0v-1zm-3.407 4.012a6.5 6.5 0 015.814 0l.249.125-.095.095a4.329 4.329 0 01-6.122 0l-.095-.095.249-.125z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLinux.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLinux.displayName = "Linux";

export default SvgLinux;
