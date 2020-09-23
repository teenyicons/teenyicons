import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSuperscript = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1.5A1.5 1.5 0 0113.5 0h.293a1.207 1.207 0 01.854 2.06l-.94.94H15v1h-2.5a.5.5 0 01-.354-.854l1.793-1.792A.207.207 0 0013.793 1H13.5a.5.5 0 00-.5.5h-1zm-6.625 6L1.1 1.8l.8-.6L6 6.667 10.1 1.2l.8.6-4.275 5.7 4.275 5.7-.8.6L6 8.333 1.9 13.8l-.8-.6 4.275-5.7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSuperscript.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSuperscript.displayName = "Superscript";

export default SvgSuperscript;
