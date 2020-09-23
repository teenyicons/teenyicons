import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQuestionCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM5.5 6a2 2 0 012-2h.6c1.05 0 1.9.85 1.9 1.9V6a2 2 0 01-2 2v1H7V7h1a1 1 0 001-1v-.1a.9.9 0 00-.9-.9h-.6a1 1 0 00-1 1h-1zM7 11v-1h1v1H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgQuestionCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgQuestionCircle.displayName = "QuestionCircle";

export default SvgQuestionCircle;
