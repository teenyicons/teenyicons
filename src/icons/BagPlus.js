import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBagPlus = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 4v-.5a3 3 0 016 0V4m-3 3v5M5 9.5h5M2.401 6.39l-.778 7a1 1 0 00.994 1.11h9.766a1 1 0 00.994-1.11l-.778-7a1 1 0 00-.994-.89h-8.21a1 1 0 00-.994.89z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBagPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBagPlus.displayName = "BagPlus";

export default SvgBagPlus;
