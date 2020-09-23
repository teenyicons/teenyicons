import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGit = forwardRef(
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
          d="M6.44.854a1.5 1.5 0 012.12 0l5.586 5.585a1.5 1.5 0 010 2.122l-5.585 5.585a1.5 1.5 0 01-2.122 0L.854 8.561a1.5 1.5 0 010-2.122L4.793 2.5l1.353 1.353A1.5 1.5 0 007 5.914v3.171a1.5 1.5 0 101 0v-3.17c.05-.018.1-.038.147-.061l1 1a1.5 1.5 0 10.707-.707l-1-1a1.5 1.5 0 00-2-2L5.5 1.792l.94-.94z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGit.displayName = "Git";

export default SvgGit;
