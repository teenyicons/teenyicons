import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWan = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 14.5l-.489.105a.5.5 0 00.967.042L3.5 14.5zm4-13l.478-.147a.5.5 0 00-.956 0L7.5 1.5zm4 13l-.478.147a.5.5 0 00.967-.042L11.5 14.5zM.011.605l3 14 .978-.21-3-14-.978.21zm3.967 14.042l4-13-.956-.294-4 13 .956.294zm3.044-13l4 13 .956-.294-4-13-.956.294zm4.967 12.958l3-14-.978-.21-3 14 .978.21zM0 6h15V5H0v1zm0 4h15V9H0v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWan.displayName = "Wan";

export default SvgWan;
