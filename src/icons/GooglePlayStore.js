import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGooglePlayStore = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5.5l.252-.432A.5.5 0 001 .5h.5zm0 14H1a.5.5 0 00.752.432L1.5 14.5zm12-7l.252.432a.5.5 0 000-.864L13.5 7.5zM1 .5v14h1V.5H1zm.752 14.432l12-7-.504-.864-12 7 .504.864zm12-7.864l-12-7-.504.864 12 7 .504-.864zM1.829 12.876l8-7-.658-.752-8 7 .658.752zm-.658-10l8 7 .658-.752-8-7-.658.752z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGooglePlayStore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGooglePlayStore.displayName = "GooglePlayStore";

export default SvgGooglePlayStore;
