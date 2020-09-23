import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgImage = forwardRef(
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
        <path d="M10.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12a1.505 1.505 0 01-.178.71A1.5 1.5 0 0113.5 15h-12A1.5 1.5 0 010 13.5v-12zm4.85 1.642l-.35-.35-3.5 3.5V1.5a.5.5 0 01.5-.5h12a.5.5 0 01.5.5V10h-2.293L4.854 3.146l-.005-.004z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgImage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgImage.displayName = "Image";

export default SvgImage;
