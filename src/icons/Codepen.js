import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCodepen = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l.29-.407a.5.5 0 00-.58 0L7.5.5zm7 5h.5a.5.5 0 00-.21-.407l-.29.407zm0 4l.29.407A.5.5 0 0015 9.5h-.5zm-7 5l-.29.407a.5.5 0 00.58 0L7.5 14.5zm-7-5H0a.5.5 0 00.21.407L.5 9.5zm0-4l-.29-.407A.5.5 0 000 5.5h.5zM7.21.907l7 5 .58-.814-7-5-.58.814zM14 5.5v4h1v-4h-1zm.21 3.593l-7 5 .58.814 7-5-.58-.814zm-6.42 5l-7-5-.58.814 7 5 .58-.814zM1 9.5v-4H0v4h1zM.79 5.907l7-5-.58-.814-7 5 .58.814zm0 4l7-5-.58-.814-7 5 .58.814zm6.42-5l7 5 .58-.814-7-5-.58.814zm-7 1l7 5 .58-.814-7-5-.58.814zm7.58 5l7-5-.58-.814-7 5 .58.814zM7 .5v4h1v-4H7zm0 10v4h1v-4H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCodepen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCodepen.displayName = "Codepen";

export default SvgCodepen;
