import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQuestion = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 12v-1.264c0-1.37.774-2.623 2-3.236a3.65 3.65 0 002-3.257C11.5 2.195 9.84.5 7.792.5h-.207c-1.335 0-2.615.53-3.56 1.474L3.5 2.5m3.5 12h1"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgQuestion.displayName = "Question";

export default SvgQuestion;
