import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCaretVertical = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 13l-.332.374.332.295.332-.295L7.5 13zm0-11l.34-.367-.333-.308-.34.301L7.5 2zm.332 11.374l4.5-4-.664-.748-4.5 4 .664.748zm0-.748l-4.5-4-.664.748 4.5 4 .664-.748zm-.664-11l-4.5 4 .664.748 4.5-4-.664-.748zm-.008.74l4.313 4 .68-.733-4.313-4-.68.734z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCaretVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCaretVertical.displayName = "CaretVertical";

export default SvgCaretVertical;
