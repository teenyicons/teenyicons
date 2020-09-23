import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgItalic = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M4 1.5h9m-11 12h9m-2.5-12l-2 12" stroke={color} />
      </svg>
    );
  }
);

SvgItalic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgItalic.displayName = "Italic";

export default SvgItalic;
