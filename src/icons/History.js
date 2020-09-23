import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHistory = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 12.399l.37-.336-.006-.007-.007-.007-.357.35zm1 1.101v.5H4v-.5h-.5zm3.5.982l.018-.5-.053 1 .035-.5zM7.5 7.5H7a.5.5 0 00.146.354L7.5 7.5zm6.5 0A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM2.857 12.049A6.477 6.477 0 011 7.5H0c0 2.043.818 3.897 2.143 5.249l.714-.7zm-.727.686l1 1.101.74-.672-1-1.101-.74.672zM7.5 14a6.62 6.62 0 01-.465-.016l-.07.997c.177.013.355.019.535.019v-1zm.018 0l-.5-.017-.036 1 .5.017.036-1zM7 3v4.5h1V3H7zm.146 4.854l3 3 .708-.708-3-3-.708.708zM0 14h3.5v-1H0v1zm4-.5V10H3v3.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHistory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHistory.displayName = "History";

export default SvgHistory;
