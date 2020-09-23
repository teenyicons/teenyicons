import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSearchProperty = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 8.5H4a.5.5 0 00.5.5v-.5zm4 0V9a.5.5 0 00.5-.5h-.5zm0-2.5H9a.5.5 0 00-.146-.354L8.5 6zm-2-2l.354-.354a.5.5 0 00-.708 0L6.5 4zm-2 2l-.354-.354A.5.5 0 004 6h.5zm10.354 8.146l-4-4-.708.708 4 4 .708-.708zM6.5 12A5.5 5.5 0 011 6.5H0A6.5 6.5 0 006.5 13v-1zM12 6.5A5.5 5.5 0 016.5 12v1A6.5 6.5 0 0013 6.5h-1zM6.5 1A5.5 5.5 0 0112 6.5h1A6.5 6.5 0 006.5 0v1zm0-1A6.5 6.5 0 000 6.5h1A5.5 5.5 0 016.5 1V0zm-2 9h4V8h-4v1zM9 8.5V6H8v2.5h1zm-.146-2.854l-2-2-.708.708 2 2 .708-.708zm-2.708-2l-2 2 .708.708 2-2-.708-.708zM4 6v2.5h1V6H4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSearchProperty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSearchProperty.displayName = "SearchProperty";

export default SvgSearchProperty;
