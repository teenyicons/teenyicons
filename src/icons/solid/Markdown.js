import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMarkdown = forwardRef(
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
          d="M0 3.5A1.5 1.5 0 011.5 2h12A1.5 1.5 0 0115 3.5v8a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 11.5v-8zM10 5v3.293L8.854 7.146l-.708.708 2 2a.5.5 0 00.708 0l2-2-.707-.708L11 8.293V5h-1zm-7.146.146A.5.5 0 002 5.5V10h1V6.707l1.5 1.5 1.5-1.5V10h1V5.5a.5.5 0 00-.854-.354L4.5 6.793 2.854 5.146z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMarkdown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMarkdown.displayName = "Markdown";

export default SvgMarkdown;
