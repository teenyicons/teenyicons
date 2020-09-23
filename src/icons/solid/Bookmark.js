import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBookmark = forwardRef(
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
          d="M13 0H2v14.5a.5.5 0 00.812.39L7.5 11.14l4.688 3.75A.5.5 0 0013 14.5V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBookmark.displayName = "Bookmark";

export default SvgBookmark;
