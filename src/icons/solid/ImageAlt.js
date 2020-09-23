import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgImageAlt = forwardRef(
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
        <path d="M11 4h-1V3h1v1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12.01A1.5 1.5 0 0113.5 15h-12A1.5 1.5 0 010 13.5v-12zm14 6.787l-2.5-2.498-2.959 2.956L4.5 3.696 1 8.074V1.5a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v6.787z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgImageAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgImageAlt.displayName = "ImageAlt";

export default SvgImageAlt;
