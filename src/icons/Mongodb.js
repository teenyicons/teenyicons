import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMongodb = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l.369-.338a.5.5 0 00-.738 0L7.5.5zm0 13l-.393.309a.5.5 0 00.786 0L7.5 13.5zM4.623 9.838l-.393.31.393-.31zm.246-6.467L4.5 3.032l.369.337zm5.262 0l.369-.338-.369.337zm.246 6.467l.393.31-.393-.31zM8 15V.5H7V15h1zm-.107-1.809L5.016 9.53l-.786.618 2.877 3.662.786-.618zM5.237 3.708L7.87.838 7.13.162l-2.63 2.87.736.676zM7.131.838l2.632 2.87.737-.675L7.869.163 7.13.837zm2.853 8.691l-2.877 3.662.786.618 2.877-3.662-.786-.618zm-.221-5.82a4.5 4.5 0 01.22 5.82l.787.618a5.5 5.5 0 00-.27-7.114l-.737.675zm-4.747 5.82a4.5 4.5 0 01.221-5.82L4.5 3.032a5.5 5.5 0 00-.27 7.114l.786-.618z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMongodb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMongodb.displayName = "Mongodb";

export default SvgMongodb;
