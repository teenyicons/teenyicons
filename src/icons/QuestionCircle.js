import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQuestionCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 9V7.5H8A1.5 1.5 0 009.5 6v-.1a1.4 1.4 0 00-1.4-1.4h-.6A1.5 1.5 0 006 6m1 4.5h1m-.5 4a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
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
