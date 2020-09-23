import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgJavascript = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3h-1A1.5 1.5 0 018.5 11m-2-5v5a1.5 1.5 0 01-3 0M.5.5h14v14H.5V.5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgJavascript.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgJavascript.displayName = "Javascript";

export default SvgJavascript;
