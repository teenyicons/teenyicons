import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQuestionSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 9V7.5H8A1.5 1.5 0 009.5 6v-.1a1.4 1.4 0 00-1.4-1.4h-.6A1.5 1.5 0 006 6m1 4.5h1"
          stroke={color}
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
