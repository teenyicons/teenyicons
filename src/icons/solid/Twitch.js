import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTwitch = forwardRef(
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
          d="M.5 0a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h2v2.5a.5.5 0 00.825.38L6.685 12H11.5a.5.5 0 00.354-.146l3-3A.5.5 0 0015 8.5v-8a.5.5 0 00-.5-.5H.5zM10 8V3h1v5h-1zM7 3v5h1V3H7z"
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
