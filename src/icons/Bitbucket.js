import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBitbucket = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5.5V0a.5.5 0 00-.495.57L.5.5zm14 0l.495.07A.5.5 0 0014.5 0v.5zm-2 14v.5a.5.5 0 00.495-.43l-.495-.07zm-10 0l-.495.07A.5.5 0 002.5 15v-.5zM5 4.5V4a.5.5 0 00-.498.542L5 4.5zm4.5 6v.5a.5.5 0 00.498-.459L9.5 10.5zm-4 0l-.498.041A.5.5 0 005.5 11v-.5zM.5 1h14V0H.5v1zM14.005.43l-2 14 .99.14 2-14-.99-.14zM12.5 14h-10v1h10v-1zm-9.505.43l-2-14-.99.14 2 14 .99-.14zM5 5h5V4H5v1zm4.502-.542l-.5 6 .996.083.5-6-.996-.083zM9.5 10h-4v1h4v-1zm-3.502.459l-.5-6-.996.083.5 6 .996-.083zM10 5h4V4h-4v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBitbucket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBitbucket.displayName = "Bitbucket";

export default SvgBitbucket;
