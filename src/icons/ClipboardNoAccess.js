import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgClipboardNoAccess = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M11 1.5h2.5v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-12H4m5.5 5l-4 4m-1-10h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2zm3 11a3 3 0 110-6 3 3 0 010 6z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgClipboardNoAccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgClipboardNoAccess.displayName = "ClipboardNoAccess";

export default SvgClipboardNoAccess;
