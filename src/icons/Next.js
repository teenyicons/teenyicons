import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNext = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 2.5l.29-.407A.5.5 0 001 2.5h.5zm0 10H1a.5.5 0 00.79.407L1.5 12.5zm7-5l.29.407a.5.5 0 000-.814L8.5 7.5zM1 2.5v10h1v-10H1zm.79 10.407l7-5-.58-.814-7 5 .58.814zm7-5.814l-7-5-.58.814 7 5 .58-.814zM13 2v11h1V2h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNext.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNext.displayName = "Next";

export default SvgNext;
