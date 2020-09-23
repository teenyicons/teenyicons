import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgQuestion = forwardRef(
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
          d="M3.672 1.62A5.534 5.534 0 017.585 0h.207C10.122 0 12 1.925 12 4.243a4.15 4.15 0 01-2.276 3.704A3.118 3.118 0 008 10.737V12H7v-1.264c0-1.56.881-2.986 2.276-3.683A3.15 3.15 0 0011 4.243C11 2.465 9.558 1 7.792 1h-.207a4.534 4.534 0 00-3.206 1.328l-.525.526-.708-.708.526-.525zM8 15H7v-1h1v1z"
          fill={color}
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
