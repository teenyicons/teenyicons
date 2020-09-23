import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTwitch = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5.5V0a.5.5 0 00-.5.5h.5zm14 0h.5a.5.5 0 00-.5-.5v.5zm0 8l.354.354A.5.5 0 0015 8.5h-.5zm-3 3v.5a.5.5 0 00.354-.146L11.5 11.5zm-5 0V11a.5.5 0 00-.325.12l.325.38zm-3.5 3h-.5a.5.5 0 00.825.38L3 14.5zm0-3h.5A.5.5 0 003 11v.5zm-2.5 0H0a.5.5 0 00.5.5v-.5zM.5 1h14V0H.5v1zM14 .5v8h1v-8h-1zm.146 7.646l-3 3 .708.708 3-3-.708-.708zM11.5 11h-5v1h5v-1zm-5.325.12l-3.5 3 .65.76 3.5-3-.65-.76zM3.5 14.5v-3h-1v3h1zM3 11H.5v1H3v-1zm-2 .5V.5H0v11h1zM10 3v5h1V3h-1zM7 3v5h1V3H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTwitch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTwitch.displayName = "Twitch";

export default SvgTwitch;
