import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQuestionSmall = forwardRef(
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
          d="M5.5 6a2 2 0 012-2h.6c1.05 0 1.9.85 1.9 1.9V6a2 2 0 01-2 2v1H7V7h1a1 1 0 001-1v-.1a.9.9 0 00-.9-.9h-.6a1 1 0 00-1 1h-1zM8 10v1H7v-1h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgQuestionSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgQuestionSmall.displayName = "QuestionSmall";

export default SvgQuestionSmall;
