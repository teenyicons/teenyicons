import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRss = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 13.5a1 1 0 102 0 1 1 0 00-2 0zM14.5 15C14.5 6.992 8.008.5 0 .5M0 6.5A8.5 8.5 0 018.5 15"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgRss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRss.displayName = "Rss";

export default SvgRss;
