import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHdmiCable = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 4V.5h8V4M5 2.5h1m3 0h1M5.5 13v2m4-2v2m-7-10.5h10v5l-2 1v2h-6v-2l-2-1v-5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgHdmiCable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHdmiCable.displayName = "HdmiCable";

export default SvgHdmiCable;
