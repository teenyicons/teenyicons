import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAttachment = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 0v4.5a2 2 0 104 0v-3a1 1 0 00-2 0V5M6 .5h6.5a1 1 0 011 1v12a1 1 0 01-1 1h-10a1 1 0 01-1-1V8M11 4.5H7m4 3H7m4 3H4"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAttachment.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAttachment.displayName = "Attachment";

export default SvgAttachment;
