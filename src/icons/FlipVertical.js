import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFlipVertical = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 3.5H5a.5.5 0 00-.947-.224L4.5 3.5zm0 8v.5a.5.5 0 00.5-.5h-.5zm-4 0l-.447-.224A.5.5 0 00.5 12v-.5zm10-8l.447-.224A.5.5 0 0010 3.5h.5zm0 8H10a.5.5 0 00.5.5v-.5zm4 0v.5a.5.5 0 00.447-.724l-.447.224zM4 3.5v8h1v-8H4zm.5 7.5h-4v1h4v-1zm-3.553.724l4-8-.894-.448-4 8 .894.448zM10 3.5v8h1v-8h-1zm.5 8.5h4v-1h-4v1zm4.447-.724l-4-8-.894.448 4 8 .894-.448zM7 0v15h1V0H7z"
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
