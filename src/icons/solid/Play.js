import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlay = forwardRef(
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
          d="M4.79 2.093A.5.5 0 004 2.5v10a.5.5 0 00.79.407l7-5a.5.5 0 000-.814l-7-5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPlay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlay.displayName = "Play";

export default SvgPlay;
