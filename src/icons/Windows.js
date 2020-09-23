import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWindows = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 3.5l-.105-.489A.5.5 0 000 3.5h.5zm14-3h.5a.5.5 0 00-.605-.489L14.5.5zm0 14l-.07.495A.5.5 0 0015 14.5h-.5zm-14-2H0a.5.5 0 00.43.495L.5 12.5zm.105-8.511l14-3-.21-.978-14 3 .21.978zM14 .5v14h1V.5h-1zm.57 13.505l-14-2-.14.99 14 2 .14-.99zM1 12.5v-9H0v9h1zM.5 8h14V7H.5v1zM6 2v11h1V2H6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWindows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWindows.displayName = "Windows";

export default SvgWindows;
