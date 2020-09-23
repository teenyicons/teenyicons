import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFlipVertical = forwardRef(
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
          d="M7 0v15h1V0H7zM4.615 3.013A.5.5 0 015 3.5v8a.5.5 0 01-.5.5h-4a.5.5 0 01-.447-.724l4-8a.5.5 0 01.562-.263zM10.385 3.013a.5.5 0 01.562.263l4 8A.5.5 0 0114.5 12h-4a.5.5 0 01-.5-.5v-8a.5.5 0 01.385-.487z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFlipVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFlipVertical.displayName = "FlipVertical";

export default SvgFlipVertical;
