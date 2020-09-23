import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGitlab = forwardRef(
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
          d="M2.974.342a.5.5 0 00-.96.037l-2 8a.5.5 0 00.16.5l7 6a.5.5 0 00.651 0l7-6a.5.5 0 00.16-.5l-2-8a.5.5 0 00-.96-.037L10.14 6H4.86L2.974.342z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGitlab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGitlab.displayName = "Gitlab";

export default SvgGitlab;
